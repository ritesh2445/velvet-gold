import heroImg from "@/assets/hero.jpg";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Cinematic wedding photograph"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-background via-background/85 to-background/30" />
      </div>

      {/* Vertical gold divider at ~58% */}
      <div
        className="hidden lg:block absolute top-[18%] bottom-[18%] w-px bg-gold/40"
        style={{ left: "58%" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-40 pb-20 lg:pt-44 min-h-screen flex flex-col justify-center">
        <div className="grid lg:grid-cols-[58%_42%] gap-14 items-center">
          {/* Left content */}
          <div>
            <p
              className="eyebrow mb-8 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              Next Level Photography · Amravati
            </p>

            <h1 className="font-serif text-ivory leading-[0.98] text-[clamp(2.8rem,7vw,6rem)]">
              <span
                className="block opacity-0 animate-fade-up"
                style={{ animationDelay: "0.25s" }}
              >
                Every Frame
              </span>
              <span
                className="block italic text-gold opacity-0 animate-fade-up"
                style={{ animationDelay: "0.5s" }}
              >
                Tells a Story
              </span>
              <span
                className="block opacity-0 animate-fade-up"
                style={{ animationDelay: "0.75s" }}
              >
                Worth Telling
              </span>
            </h1>

            <p
              className="mt-8 max-w-lg text-ivory/70 text-base lg:text-lg font-light opacity-0 animate-fade-up"
              style={{ animationDelay: "1s" }}
            >
              Capturing emotions, candid glances and timeless rituals across
              India — crafted into cinematic stories you'll relive forever.
            </p>

            <div
              className="mt-10 flex flex-wrap items-center gap-5 opacity-0 animate-fade-up"
              style={{ animationDelay: "1.2s" }}
            >
              <a
                href="#packages"
                className="bg-gold text-background hover:bg-gold/90 transition-colors px-8 py-4 text-[0.7rem] uppercase tracking-[0.3em] font-medium"
              >
                View Packages
              </a>
              <a
                href="#portfolio"
                className="group inline-flex items-center gap-3 text-ivory border-b border-ivory/30 hover:border-gold hover:text-gold transition-colors pb-1 text-[0.7rem] uppercase tracking-[0.3em]"
              >
                See Our Work
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right stats */}
          <div
            className="hidden lg:flex flex-col gap-12 pl-14 opacity-0 animate-fade-up"
            style={{ animationDelay: "1.4s" }}
          >
            {[
              { n: "230+", l: "Couples Captured" },
              { n: "4.9★", l: "Google Rating" },
              { n: "6+", l: "Years of Craft" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-serif text-5xl text-gold leading-none">
                  {s.n}
                </div>
                <div className="mt-3 text-[0.65rem] uppercase tracking-[0.3em] text-ivory/60">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* scroll cue */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in flex flex-col items-center gap-2"
          style={{ animationDelay: "1.8s" }}
        >
          <span className="text-[0.6rem] uppercase tracking-[0.3em] text-ivory/40">
            Scroll
          </span>
          <div className="h-10 w-px bg-gradient-to-b from-gold/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}
