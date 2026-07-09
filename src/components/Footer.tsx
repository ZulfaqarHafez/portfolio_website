const Footer = () => {
  const currentYear = new Date().getFullYear();

  const cells = [
    { label: 'Drawn by', value: 'Zulfaqar Hafez' },
    { label: 'Checked by', value: 'Also Zulfaqar Hafez' },
    { label: 'Materials', value: 'React · TypeScript · Tailwind' },
    { label: 'Scale', value: 'Idea : Shipped — 1:1' },
    { label: 'Revision', value: `${currentYear}.2` },
    { label: 'Sheet', value: '1 of 1' },
  ];

  const links = [
    { name: 'GitHub', href: 'https://github.com/ZulfaqarHafez' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/zulfaqar-hafez' },
    { name: 'Hugging Face', href: 'https://huggingface.co/Zulfhagez' },
    { name: 'Email', href: 'mailto:zulfaqarhafez@gmail.com' },
  ];

  return (
    <footer className="border-t b-strong bg-paper">
      <div className="container-custom px-4 sm:px-6 py-8">
        {/* Title block, as found in the corner of every good drawing */}
        <div className="border b-strong bg-raised grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 mb-6">
          {cells.map((cell, idx) => (
            <div
              key={cell.label}
              className={`px-4 py-3 border-b b-line lg:border-b-0 ${idx % 2 === 1 ? 'border-l' : ''} ${
                idx % 3 !== 0 ? 'sm:border-l' : 'sm:border-l-0'
              } ${idx > 0 ? 'lg:border-l' : ''}`}
            >
              <p className="annot t-faint mb-1">{cell.label}</p>
              <p className="font-annot text-xs t-ink">{cell.value}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="annot t-faint">
            © {currentYear} Zulfaqar Hafez · All claims reserved
          </p>
          <nav className="flex items-center gap-5" aria-label="Social links">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="annot t-soft hover:t-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
