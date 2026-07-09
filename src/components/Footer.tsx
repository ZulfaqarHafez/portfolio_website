import Monogram from './art/Monogram';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t b-line bg-base">
      <div className="container-custom px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Monogram size={30} />
          <p className="t-faint text-sm">© {year} Zulfaqar Hafez — made in Singapore</p>
        </div>
        <p className="label t-faint">
          React · TypeScript · Tailwind — grown by hand
        </p>
      </div>
    </footer>
  );
};

export default Footer;
