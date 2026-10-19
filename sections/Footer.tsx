const Footer = () => (
  <footer className="px-gutter max-w-page mx-auto w-full pb-10">
    <div className="border-line flex items-center justify-between gap-6 border-t pt-6">
      <p className="text-caption text-ink-soft uppercase">
        © {new Date().getFullYear()} Abdulhamid Afolabi
      </p>

      <a
        href="#home"
        className="group text-ink text-caption inline-flex items-center gap-2 font-medium uppercase"
      >
        Back to top
        <span
          aria-hidden
          className="ease-out-expo inline-block transition-transform duration-300 group-hover:-translate-y-1"
        >
          ↑
        </span>
      </a>
    </div>
  </footer>
);

export default Footer;
