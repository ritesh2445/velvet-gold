import { Logo } from "./Logo";

const links = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Packages", href: "#packages" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-3 gap-8 items-center">
        <div className="flex justify-center md:justify-start">
          <Logo className="h-9" />
        </div>
        <p className="text-center text-[0.7rem] uppercase tracking-[0.25em] text-ivory/50">
          © 2026 Next Level Photography, Amravati
          <br />
          <span className="text-gold/80 normal-case tracking-wider font-serif italic text-sm">
            Website crafted by Ritesh Martawar
          </span>
        </p>
        <nav className="flex flex-wrap gap-6 justify-center md:justify-end">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.65rem] uppercase tracking-[0.3em] text-ivory/60 hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
