import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { User, Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "Cinematic Films", href: "#films" },
  { label: "Gallery", href: "#gallery" },
  { label: "Events", href: "#events" },
  { label: "Albums", href: "#albums" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-border py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto max-w-[1500px] px-6 lg:px-10 flex items-center justify-between gap-6">
          <a href="#top" className="flex items-center shrink-0">
            <Logo className="h-11" />
          </a>

          <nav className="hidden xl:flex items-center gap-7">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="label-cap text-foreground/80 hover:text-amber transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://wa.me/919545136425?text=Hi%20Next%20Level%20Photography%2C%20I%20want%20to%20enquire."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 hover:border-amber hover:text-amber transition-colors"
            >
              <User className="h-3.5 w-3.5" />
              <span className="label-cap">Book</span>
            </a>
            <button
              onClick={() => setOpen(true)}
              className="xl:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border hover:border-amber hover:text-amber transition-colors"
              aria-label="Open menu"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile fullscreen menu */}
      <div
        className={`fixed inset-0 z-[60] bg-background transition-all duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <Logo className="h-10" />
          <button
            onClick={() => setOpen(false)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border hover:border-amber hover:text-amber"
            aria-label="Close menu"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <nav className="flex flex-col px-6 py-10 gap-6">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="display text-4xl text-foreground hover:text-amber transition-colors"
              style={{
                animation: open
                  ? `fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 0.05}s both`
                  : "none",
              }}
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
