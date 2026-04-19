import { Play } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen w-full overflow-hidden bg-background"
    >
      {/* Subtle background shape */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_oklch(0.78_0.14_60)_0%,_transparent_50%)]" />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-6 lg:px-10 pt-36 pb-24 lg:pt-44 min-h-screen flex flex-col justify-center">
        <p
          className="eyebrow opacity-0 animate-fade-up mb-10"
          style={{ animationDelay: "0.1s" }}
        >
          Crafting Visual Excellence
        </p>

        <h1 className="display text-foreground text-[clamp(3.5rem,13vw,11rem)]">
          <span
            className="block opacity-0 animate-fade-up"
            style={{ animationDelay: "0.25s" }}
          >
            Pre-Wedding
          </span>
          <span
            className="block opacity-0 animate-fade-up"
            style={{ animationDelay: "0.45s" }}
          >
            Stories
          </span>
        </h1>

        <p
          className="mt-10 max-w-xl text-foreground/70 text-base lg:text-lg opacity-0 animate-fade-up"
          style={{ animationDelay: "0.7s" }}
        >
          Cinematic films & editorial photography by Sameer & team — capturing
          230+ love stories across Maharashtra with timeless craft.
        </p>

        <div
          className="mt-14 flex flex-wrap items-center gap-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.9s" }}
        >
          <a href="#services" className="pill pill-light">
            Explore Services
          </a>
          <a
            href="#films"
            className="group inline-flex items-center gap-4"
          >
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-border group-hover:border-amber group-hover:bg-amber/10 transition-all">
              <Play className="h-4 w-4 text-foreground group-hover:text-amber transition-colors fill-current" />
            </span>
            <span className="label-cap text-foreground group-hover:text-amber transition-colors">
              Cinematic Films
            </span>
          </a>
        </div>

        {/* Scroll cue */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-0 animate-fade-in"
          style={{ animationDelay: "1.4s" }}
        >
          <span className="label-cap text-foreground/50 !text-[0.6rem]">
            Scroll for More
          </span>
          <div className="scroll-cue" />
        </div>
      </div>
    </section>
  );
}
