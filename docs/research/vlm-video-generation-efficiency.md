# From VLM to Video Generation — Requirements & CPU-Efficient Alternatives

*Research synthesis, July 2026. Compiled from three parallel research agents: (1) unified
understanding+generation architectures, (2) efficient video-gen inference, (3) the
keyframe-then-interpolate paradigm. Companion to the VLM and video-gen architecture explainers.*

---

## Part A — What it takes for a VLM to *generate* video

A VLM reads images; making it write them (or write video) means giving it an output path back to
pixels. Every unified model picks one of **three bridges** (survey: arXiv:2505.02567):

### Route 1 — Pure discrete-token autoregression
Quantize video into codebook tokens, extend the LLM vocabulary, train next-token prediction on
everything. Chameleon (2405.09818), Emu3 (2409.18869), VideoPoet (2312.14125), LWM (2402.08268),
Emu3.5 (2510.26583 — 34B, 10T interleaved tokens, RL post-training, ~20× parallel decoding via
DiDA). The enabling piece was MAGVIT-v2's **lookup-free quantization** (2310.05737) — binary LFQ
scales codebooks to 2^18 and made "language model beats diffusion" possible.
- Pros: one objective, standard LLM serving, RL-able.
- Cons: lossy tokenizers cap fidelity; error accumulation; weakest visual quality of the three.

### Route 2 — Hybrid: AR for text, diffusion for pixels, one backbone
Transfusion (2408.11039) mixes next-token loss and diffusion loss in one transformer; Show-o2
(2506.15564) does it in a 3D-causal-VAE latent space natively for video; BAGEL (2505.14683) uses a
Mixture-of-Transformers with an understanding expert (SigLIP features) and a generation expert (VAE
latents + rectified flow) sharing attention — emergent editing capabilities, beats Qwen2.5-VL on
understanding. Janus/Janus-Pro (2410.13848, 2501.17811) contributed the key **decoupling insight**:
one shared visual encoder serving both understanding and generation degrades understanding — use
separate encoders per task.
- Best quality + true unification, but requires trillion-token-scale interleaved training.

### Route 3 — External decoder conditioning (the retrofit path)
The LLM/VLM emits continuous embeddings or learnable query tokens that **condition a separate
diffusion decoder**: Emu2 (2312.13286), MetaQueries (2504.06256 — frozen VLM!), Omni-Video
(2507.06119), UniVid (2509.24200).
- Cheapest by orders of magnitude: millions (not trillions) of pairs, O(10–100) GPU-weeks.
- Zero understanding regression if the VLM stays frozen.

### The documented failure mode
Understanding regressions / catastrophic forgetting when generation training touches the VLM
(2601.10497, 2509.10529). Mitigations: decoupled encoders (Janus), MoT experts (BAGEL),
frozen-backbone adapters (MetaQueries), replay of understanding data.

### Minimum viable path for a small team (today)
1. **Don't do unified pretraining.** Take an open video DiT — Wan 2.2, LTX-Video, CogVideoX — and
   condition it on your VLM: learnable queries + a small connector mapping frozen-VLM hidden states
   into the DiT's cross-attention (replacing/augmenting its T5 text encoder).
2. Optionally unfreeze top VLM layers with understanding-data replay for tighter semantic control.
3. If streaming/interactive output matters, distill the conditioned DiT into a causal few-step
   generator (Self-Forcing-style).
4. Only pursue true unified training if you have trillion-token data and need emergent cross-modal
   editing — that's where unified models actually pay off.

### AR vs diffusion for video (2025–26 state)
Full-sequence diffusion (Wan, CogVideoX, HunyuanVideo, LTX) holds the quality crown; the field has
pivoted hard to **causal/AR video diffusion** for streaming and world models via teacher-student
distillation (CausVid 2412.07772, Self-Forcing 2506.08009, Causal Forcing 2602.02214). AR wins on
latency, interactivity, unbounded length; loses on per-frame fidelity and drift.

---

## Part B — Efficiency: the attention hunch (confirmed)

Full 3D self-attention is the cost bomb — **>76–80% of transformer FLOPs** in models like Wan2.1
(VSA, 2505.13389), and it scales quadratically in tokens ≈ T·H·W/patch.

| Lever | Representative work | Gain |
|---|---|---|
| Linear/SSM attention | LinGen (2412.09856, Mamba2-based) | up to 15× FLOPs / 11.5× latency |
| Post-hoc linearization | LinVideo (2510.08318), Attention Surgery (2509.24899) | convert a pretrained DiT, no full retrain |
| Sparse 3D attention | Sliding Tile Attention (2502.04507), Radial (2506.19852), VSA (2505.13389) | 1.4–3.5× kernel-level, no retraining |
| Factorized space-time | Latte-style | ~30× fewer attention FLOPs; quality cost — why SOTA left it |
| **Step reduction (biggest win)** | DMD/DMD2, Seaweed-APT (1 step!, 2501.08316), CausVid, Self-Forcing | 30–50 steps → 1–4 = ~10–50× |
| Cache/reuse (training-free) | TeaCache (2411.19108) ~2–4.4×, PAB, DeepCache | multiplies with step count — little left to cache at 4 steps |
| Quantization | SVDQuant W4A4 (2411.05007) + Nunchaku | 3.6× memory, up to 8.7× speed; GGUF Q4/Q8 of Wan/LTX standard |
| High-compression VAE | LTX-Video 1:192 latent (2501.00103), DC-AE (2410.10733) | main reason LTX is real-time-capable on GPU |
| Resolution cascade | Pyramidal Flow (2410.05954); generate 480p few-step → cheap SR | large; matches Movie Gen's design |

### CPU reality check (July 2026)
- **Images on CPU: solved.** FastSD CPU + OpenVINO ≈ 0.8 s per 512² image (1-step SDXS, i7);
  LCM 4-step ≈ 2–5 s. Intel NPUs run INT8 SD pipelines.
- **Video on CPU: not real-time, not close.** stable-diffusion.cpp now runs Wan 2.1/2.2 CPU-only,
  but throughput is ~1/20–1/50 of a mid GPU → tens of minutes per short clip. Even a hypothetical
  perfectly optimized 1-step 2B model at 256p is ~1–10 s/frame on CPU. Interactive ≥15 fps is
  **~2 orders of magnitude away**.
- Realistic CPU/NPU target: *a short clip in minutes, offline* — or generate on GPU and stream.

**Practical lowest-end recipe:** distilled 4-step small model (LTX-2B or Wan-1.3B) + W4/W8 GGUF via
stable-diffusion.cpp or OpenVINO + high-compression VAE + 480p→SR (+ TeaCache only if >8 steps).

---

## Part C — Efficiency: the N-keyframes hunch (confirmed, with a named lineage)

**Verdict: well-explored and validated.** Dominant for long/efficient video 2022–24, displaced by
end-to-end 3D DiTs for short clips, **resurging 2025–26** for long videos and world models.

### Lineage
- **Cascades:** Imagen Video (2210.02303) — base low-fps video → temporal SR → spatial SR; Movie
  Gen (2410.13720) keeps the idea on the resolution axis.
- **Diffusion-over-diffusion:** NUWA-XL (2303.12346) — global model samples keyframes *jointly*
  across the timeline, local models fill between, all in parallel: 1024 frames from 7.55 min →
  **26 s (−94%)**.
- **Explicit two-stage:** FusionFrames/Kandinsky (2311.13073), StoryDiffusion (2405.01434 —
  consistent keyframes + semantic motion predictor), KeyVID (2504.09656).
- **2025–26 revival:** KeyWorld (2509.21027) — world models should reason only at semantic
  keyframes; SKIP (2606.00664) — **4.16× end-to-end speedup, interpolation <10% of budget**
  (~35 s keyframes vs ~3 s fill per trajectory). ~92% of compute lives in keyframes — exactly the
  intuition behind the question.

### The cheap filler
- **RIFE** (2011.06294): 30+ fps at 720p on a 2080Ti, arbitrary timestep, ships inside video
  players — **CPU-feasible**, the only class of model here that is.
- FILM (2202.04901) — built for large motion between near-duplicates (closest match to sparse
  keyframes); EMA-VFI, AMT, PerVFI refine quality.
- **Generative inbetweening** for gaps too big for flow: Generative Inbetweening (2408.15239),
  Framer (2410.18978, draggable trajectories), ToonCrafter (2405.17933, animation). 10–100× costlier
  than RIFE but amortized over short windows.

### Why the math works
Full pipeline: ~120 frames × 30–50 denoise steps × quadratic 3D attention. Keyframe pipeline:
N≈8–15 images (few-step image sampler, ~10× fewer tokens → up to ~100× fewer attention FLOPs on
that term) + a single feed-forward warp per in-between frame (no iterative sampling at all).

### The two failure modes (and fixes)
1. **Keyframe drift** — independent samples diverge in identity/style/layout. Fixes: joint sampling
   (NUWA-XL), consistent self-attention across the keyframe batch (StoryDiffusion), cross-frame
   attention on a reference (Text2Video-Zero 2303.13439), IP-Adapter conditioning, shared noise.
2. **Interpolation can't create** — flow assumes frame-B content exists in frame A. Fails on large
   displacement, disocclusion, out-of-plane rotation, new content between keyframes. Lumiere
   (2401.12945) argued this ambiguity is why frontier short-clip models went full-spatiotemporal.

**Supported hybrid recipe:** keyframes 0.5–1 s apart, jointly sampled → RIFE/FILM by default →
escalate to generative inbetweening only where flow confidence is low.

---

## Bottom line

- **VLM → video:** condition an existing open video DiT on frozen-VLM query embeddings
  (MetaQueries/Omni-Video pattern). Unified training is a frontier-lab game.
- **Attention hunch:** right — linear/sparse attention gives 3–15×, but **step distillation
  (30–50 → 1–4) is the bigger single lever**, and they stack.
- **Keyframe hunch:** right, named, and current — the compute belongs in a few semantically
  important frames (SKIP/KeyWorld); interpolation is nearly free and even CPU-viable (RIFE).
- **Honest CPU constraint:** lag-free *generation* on CPU doesn't exist in 2026. The CPU-realistic
  split: sparse keyframes on whatever accelerator is available (or precomputed), real-time
  interpolation/playback on CPU. That split *is* the efficient architecture.
