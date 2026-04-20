import { Logo } from "./Logo";
import { Facebook, Instagram, Youtube, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background pt-16 sm:pt-20 pb-8 overflow-hidden">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-6 lg:px-10">
        <div className="grid md:grid-cols-3 gap-12 pb-16 border-b border-border">
          <div>
            <Logo className="h-11" />
            <p className="mt-6 text-foreground/60 text-sm max-w-xs">
              Crafting visuals that define brands and capture souls — one frame at a time.
            </p>
          </div>

          <div className="text-center">
            <div className="label-cap text-foreground/60 mb-5">Connect</div>
            <div className="flex justify-center gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-12 w-12 rounded-full border border-border flex items-center justify-center hover:border-amber hover:text-amber transition-colors"
                  aria-label="social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:text-right">
            <div className="label-cap text-foreground/60 mb-5">Updates</div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center gap-2 border-b border-border pb-2 max-w-sm md:ml-auto"
            >
              <input
                type="email"
                placeholder="Enter email"
                className="flex-1 bg-transparent outline-none text-sm placeholder:text-foreground/40"
              />
              <button
                type="submit"
                className="h-9 w-9 rounded-full inline-flex items-center justify-center text-foreground hover:text-amber transition-colors"
                aria-label="subscribe"
              >
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Massive wordmark */}
        <div className="py-10 sm:py-12 overflow-hidden">
          <div className="wordmark text-center text-foreground/95">NEXTLEVEL</div>
          <div className="wordmark text-center text-foreground/95 text-2xl">PHOTOGRAPHY</div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-border">
          <div className="label-cap text-foreground/50 text-center md:text-left">
            © 2026 NextLevel · All Rights Reserved
            <br />
            <span className="text-amber/80 normal-case tracking-wider !text-[0.6rem]">
              Website crafted by Ritesh Martawar
            </span>
          </div>
          <div className="flex gap-6">
            {["Privacy", "Refund", "Terms"].map((l) => (
              <a
                key={l}
                href="#"
                className="label-cap text-foreground/50 hover:text-amber transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
