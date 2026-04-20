import { Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen w-full overflow-hidden bg-background"
    >
      {/* Background image with Ken Burns effect */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroBg}
          alt="Cinematic Indian wedding couple in golden hour light"
          className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
          width={1920}
          height={1280}
        />
        {/* Layered gradients for depth & legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_40%,_oklch(0.78_0.14_60_/_0.18)_0%,_transparent_55%)]" />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-6 lg:px-10 pt-32 pb-20 lg:pt-44 min-h-screen flex flex-col justify-center">
        <p
          className="eyebrow opacity-0 animate-fade-up mb-10"
          style={{ animationDelay: "0.1s" }}
        >
          Crafting Visual Excellence
        </p>

        <h1 className="display text-foreground text-[clamp(3rem,16vw,11rem)] break-words">
          <span className="block overflow-hidden">
            <span
              className="block opacity-0 animate-reveal-up"
              style={{ animationDelay: "0.25s" }}
            >
              Pre-Wedding
            </span>
          </span>
          <span className="block overflow-hidden">
            <span
              className="block opacity-0 animate-reveal-up text-amber italic font-light"
              style={{ animationDelay: "0.45s", fontStyle: "italic" }}
            >
              Stories
            </span>
          </span>
        </h1>

        <p
          className="mt-10 max-w-xl text-foreground/80 text-base lg:text-lg opacity-0 animate-fade-up"
          style={{ animationDelay: "0.7s" }}
        >
          Cinematic films & editorial photography by Sameer & team — capturing
          230+ love stories across Maharashtra with timeless craft.
        </p>

        <div
          className="mt-14 flex flex-wrap items-center gap-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.9s" }}
        >
          <a href="#services" className="pill pill-light hover-lift">
            Explore Services
          </a>
          <a href="#films" className="group inline-flex items-center gap-4">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-border group-hover:border-amber group-hover:bg-amber/10 transition-all duration-500 group-hover:scale-110">
              <Play className="h-4 w-4 text-foreground group-hover:text-amber transition-colors fill-current" />
            </span>
            <span className="label-cap text-foreground group-hover:text-amber transition-colors">
              Cinematic Films
            </span>
          </a>
        </div>

        {/* Floating stats */}
        <div
          className="mt-20 hidden md:flex items-center gap-12 opacity-0 animate-fade-up"
          style={{ animationDelay: "1.1s" }}
        >
          <div>
            <div className="display text-3xl text-amber">230+</div>
            <div className="label-cap text-foreground/60 mt-2 !text-[0.6rem]">
              Weddings
            </div>
          </div>
          <div className="h-10 w-px bg-border" />
          <div>
            <div className="display text-3xl text-amber">4.9★</div>
            <div className="label-cap text-foreground/60 mt-2 !text-[0.6rem]">
              Rated
            </div>
          </div>
          <div className="h-10 w-px bg-border" />
          <div>
            <div className="display text-3xl text-amber">12+</div>
            <div className="label-cap text-foreground/60 mt-2 !text-[0.6rem]">
              Years
            </div>
          </div>
        </div>

        {/* Scroll cue (no text) */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in"
          style={{ animationDelay: "1.4s" }}
        >
          <div className="scroll-cue" />
        </div>
      </div>
    </section>
  );
}
