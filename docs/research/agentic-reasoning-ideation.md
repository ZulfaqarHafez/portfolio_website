# Agentic Reasoning — Ideation Brief

*Research synthesis, July 2026. Compiled from four parallel research agents (foundations,
industry landscape, evaluation & open problems, opportunity scan). This is a thinking document
for project ideation — no code, no product commitment yet.*

---

## TL;DR — the four things worth internalizing

1. **The scaffolds are collapsing into the weights.** Prompted reasoning tricks (Tree-of-Thoughts,
   static planners, ad-hoc reflection) are being absorbed into RL-trained reasoning models. What
   survives in production is the plain ReAct-style tool loop **plus context/memory engineering**.
   Betting a project on a clever prompting scaffold is betting against the trend; betting on the
   *loop, memory, and tools around* a strong model is betting with it.

2. **Reliability, not capability, is the frontier.** Leaderboards report pass@1; production needs
   pass^k. A ~60% single-shot agent collapses to ~25% when it must succeed 8-for-8. METR's data:
   frontier models handle ~16-hour tasks at 50% reliability but only ~3-hour tasks at 80%. The
   50%→80% gap is the whole game.

3. **Coding is the one category that unambiguously works** — because it has verifiable feedback
   loops (tests, compilers, linters), a text-native environment, and expert reviewers. Claude Code
   passed $1B ARR; Cursor ~$1.2B. The lesson generalizes: *agents work where feedback is cheap and
   verifiable.* Pick problem domains with that property.

4. **The moat for a solo builder is a receipt, not a framework.** Every traction story in
   2025–26 (browser-use → 99K stars, Open Deep Research, Terminal-Bench → ICLR paper) followed the
   same pattern: **one sharp capability + a public benchmark number + runnable in 5 minutes + open
   source.** "Yet another framework" is dead on arrival.

---

## 1. Foundations — where reasoning actually comes from now

- **The paradigm shift (2024→2026):** From *prompted* reasoning (CoT, ReAct, ToT/GoT, Reflexion,
  Self-Refine) to *trained* reasoning. OpenAI o1 (Sep 2024) and DeepSeek-R1 (Jan 2025, RL with
  verifiable rewards / GRPO) showed reflection, backtracking, and self-verification *emerge* from
  RL — and distill into small models. Anthropic's extended thinking made the thinking budget a dial
  fused with tool use.
- **Reflection has a hard caveat:** LLMs largely *cannot* self-correct reasoning without an external
  signal (Huang et al., 2310.01798). Reflection works when grounded in verifiable feedback (test
  failures, tool errors, external verifiers) — **not** introspection alone. This is the single most
  important design constraint for any reasoning-heavy agent.
- **Process reward models (PRMs)** looked promising ("Let's Verify Step by Step") but DeepSeek-R1
  dropped them for large-scale RL (reward hacking, step-segmentation ambiguity). They survive as
  rerankers / generative verifiers.
- **A sobering result:** RLVR mostly *sharpens the base model's existing distribution* rather than
  creating new capability (Yue et al., 2504.13837). Exploration is the bottleneck. Overthinking and
  a test-time-scaling plateau are real.
- **Memory has converged on a taxonomy:** working / episodic / semantic / procedural. Seminal:
  Generative Agents (2304.03442), MemGPT (2310.08560), Voyager (skill library). But the dominant
  *practical* discipline is **context engineering** — compaction, structured note-taking (to-do
  files, scratchpads), just-in-time retrieval, sub-agent isolation. Lossy summarization and
  "context rot" are the enemies.
- **Tool use is the substrate:** CodeAct (2402.01030) — actions as executable code — beats JSON
  function calling and underpins coding agents. MCP (Nov 2024) standardized the tool interface. The
  direction is *code execution as the universal tool layer* and agent-created tools.
- **Multi-agent reality check:** Debate often fails to beat self-consistency at matched compute;
  debates homogenize toward majority opinion. What *works* is **orchestrator–worker with clean
  context isolation** (Anthropic's multi-agent research system) — multi-agent as *context
  management*, not emergent collective intelligence.

## 2. Industry landscape — what's settled and what's contested

- **Frameworks split into two camps:** vendor harnesses (Claude Agent SDK, OpenAI Agents SDK,
  Google ADK) vs. orchestration frameworks (LangGraph — enterprise leader, CrewAI — ergonomic
  multi-agent, Microsoft Agent Framework 1.0 GA Apr 2026). Practitioner consensus: **vendor SDKs
  for single agents, LangGraph for complex workflows, CrewAI for collaboration-centric designs.**
- **MCP has won** as the tool-connectivity standard (10K+ public servers, donated to the Linux
  Foundation's Agentic AI Foundation, Dec 2025). A2A (agent↔agent) is complementary and trails.
- **Coding agents are the proven, multi-billion-dollar category.** Why it worked = verifiable
  feedback + text-native env + expert users + per-seat economics.
- **Browser/computer-use agents improved but aren't trustworthy.** OSWorld rose ~12%→~66% (human
  ~72%), but OSWorld 2.0 long-horizon tasks sit ~20%. **Prompt injection is the defining unsolved
  problem** — OpenAI called it "unlikely to ever be fully solved."
- **Production pattern that won:** orchestrator + isolated subagents (~70% of deployments).
  Subagents return *summaries, not transcripts*. Human-in-the-loop is strained — devs approve ~93%
  of prompts ("consent fatigue").
- **Business reality is brutal at the top, strong at the bottom:** ~89% of agent pilots never
  scale; Gartner predicts 40%+ of agentic projects canceled by end-2027. Survivors report ~171%
  ROI. Failure causes are *organizational* (scope, data, ownership), not model capability. ROI is
  real today in: **coding, support deflection, document/back-office processing, research synthesis.**

## 3. Evaluation & open problems — the honest map

- **Benchmarks are contaminated and short-lived** (half-life ~12–18 months). SWE-bench Verified is
  saturated and discredited (OpenAI stopped reporting it in early 2026 after finding solution
  leakage). The trustworthy successors report **private/refreshing sets** (SWE-bench Pro), **pass^k**
  (τ-bench), and **horizon-based metrics** (METR).
- **Failure modes to design against:** compounding errors over long horizons (per-step reliability
  multiplies); **self-conditioning** (models seeing their own past errors err more); hallucinated
  tool results/state; context rot; non-terminating loops; sycophantic self-evaluation when
  generator == verifier; multi-agent coordination failures (MAST taxonomy: 14 modes).
- **Reliability engineering = the real discipline.** pass^k over pass@1. Independent, *grounded*
  verifiers (test suites, execution) over LLM-judge critics that inherit generator bias.
- **Agent-specific security — the lethal trifecta** (Willison, Jun 2025): private-data access +
  untrusted content + exfiltration vector = exploitable. Never combine all three. OWASP Top 10 for
  Agentic Apps (2026) codifies "least agency."
- **Unsolved:** long-horizon credit assignment; **memory that actually helps** (stale memory can
  hurt more than none); self-correction limits; when more inference compute stops helping; a
  trustworthy uncontaminated long-horizon reliability-aware eval.

## 4. Opportunity scan — the reachable gaps (tailored to your profile)

You're a Singapore-based AI engineer with CV/applied-AI projects (pose estimation, transit, triage
routing, document processing) and NVIDIA / AI Singapore / Google credentials. Three gaps are
within a solo builder's reach:

- **Agent trust infrastructure** (evaluation, provenance, security) — immature relative to demand.
- **Memory** — the documented "Day-2 failure"; even leaders (Mem0) hit only ~67% on LOCOMO, and
  plain files beat graph memory (Letta).
- **Vertical back-office agents** — 70%+ of horizontal agents die on messy real data; survivors own
  a niche + its system of record.

**Singapore angle is unusually strong right now:** IMDA published the world-first Model AI
Governance Framework *for Agentic AI* (Jan 2026) — **with zero reference implementations shipped.**
SEA-LION v4.5+ is explicitly built for agentic tool use. Funding paths exist (AI Singapore 100E up
to S$150K; GovTech {build} incubator). Recent local challenge winners skew healthcare/eldercare CV
(SilverGait — gait/fall-risk, directly adjacent to your pose work).

## 5. Candidate project directions (ranked by fit × defensibility)

| # | Idea | Why now | Difficulty | What makes it *not* a toy |
|---|------|---------|-----------|---------------------------|
| **1** | **AgentAudit** — IMDA-aligned traceability & governance harness wrapping any MCP/LangGraph agent (action provenance, approval gates, injection detection, replayable traces) | IMDA framework published, **zero reference impls**; regulators + enterprises need receipts | Medium | Certify a real agent end-to-end, publish a conformance report, get IMDA/community acknowledgment |
| **2** | **Agentic red-team gym** for *deployed* agents — attacker suite probing tool chains (email/browser/file I/O) for injection→exfiltration, scored vs OWASP LLM Top 10 | $2.3B injection losses; garak/PyRIT test *prompts*, not *tool-chains* | Med-High | Find + responsibly disclose real CVE-class issues in popular open agents |
| **3** | **Eldercare "frailty steward"** — extends your pose estimation: continuous gait/fall-risk perception → reasoning agent that triages, schedules, drafts clinician summaries | Mirrors SilverGait's winning formula; 100E/Synapxe-fundable | Medium (you own the CV half) | Real multi-day deployment, measured fall-risk lift — not a chatbot bolt-on |
| **4** | **Deep-research agent for SEA on SEA-LION** — multilingual (Bahasa/Tamil/Thai/Viet) agentic RAG, scored on DeepResearch Bench / GAIA | Open Deep Research playbook + a regional gap English clones don't serve | Medium | Top-N on a public leaderboard *and* a SEA-language eval nobody else reports |
| **5** | **Long-horizon memory benchmark + reference store** — LOCOMO-style suite targeting the "Day-2" failure + a file-first memory impl that beats Mem0's graph variant | Memory is unsolved and hotly compared | Medium | Publish reproducible numbers that reorder the leaderboard |
| **6** | **Multi-agent Singapore-transit disruption simulator** — GATSim-style generative-agent sim for MRT/bus disruption response | Academic sims lack usable demos; Smart-Nation resonance | High | Validate against a real historical disruption |

## 6. Recommendation & the decision to make

**Two front-runners:** **#1 AgentAudit** (maximal Singapore-regulatory credibility, first-mover on a
published-but-unimplemented framework, plays to the trust-infra gap) and **#3 Frailty Steward**
(reuses your CV moat, fundable, hard to dismiss as a toy, emotionally resonant demo).

Whichever you pick, the research is unanimous on one lever: **pair it with a public benchmark
result.** A number on a leaderboard is the single strongest traction signal the 2025–26 data shows,
and it's exactly the kind of receipt that turns a portfolio piece into a talked-about one.

The real fork to decide before any building starts:
- **Infra/tooling play (#1, #2, #5)** — audience is developers/regulators, moat is a benchmark +
  open source, distribution is HN/GitHub/Show-and-tell.
- **Vertical applied play (#3, #4, #6)** — audience is a domain + funders, moat is a real deployment
  with measured outcomes, distribution is challenges/grants/design partners.

Both are viable. They imply very different next 3 months.

---

## Sources

**Foundations:** arXiv 2201.11903 (CoT), 2210.03629 (ReAct), 2305.10601 (ToT), 2303.11366
(Reflexion), 2310.01798 (self-correction limits), 2501.12948 (DeepSeek-R1), 2504.13837 (RLVR
sharpening), 2304.03442 (Generative Agents), 2310.08560 (MemGPT), 2402.01030 (CodeAct);
anthropic.com/engineering (context engineering; multi-agent research system).

**Evals:** SWE-bench 2310.06770 / Pro 2509.16941; GAIA 2311.12983; OSWorld 2404.07972; τ-bench
2406.12045; METR 2503.14499 & Time Horizon 1.1 (metr.org); context rot (Chroma, Jul 2025); MAST
2503.13657; lethal trifecta (simonwillison.net, Jun 2025); OWASP Top 10 Agentic Apps 2026.

**Industry:** Claude Agent SDK / MCP (code.claude.com, Agentic AI Foundation); LangGraph/CrewAI
adoption (Turing, LangChain); JetBrains 2026 dev survey; OSWorld results (Stanford AI Index);
Gartner agentic-cancellation forecast (Jun 2025).

**Opportunity scan:** IMDA Model AI Governance Framework for Agentic AI (Jan 2026); SEA-LION
(sea-lion.ai); AI Singapore 100E; browser-use (github.com/browser-use); Open Deep Research
(huggingface.co/blog/open-deep-research); Terminal-Bench (arXiv 2601.11868); agent memory
comparison (innobu, Mem0 state-of-memory 2026).
