import { Reveal } from "./Reveal";

export function CTA() {
  return (
    <section id="films" className="relative py-24 lg:py-44 overflow-hidden border-y border-border">
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_oklch(0.78_0.14_60)_0%,_transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-5 sm:px-6 text-center">
        <Reveal>
          <p className="eyebrow justify-center">Let's Begin</p>
          <h2 className="mt-8 sm:mt-10 display text-[clamp(2.2rem,8vw,7rem)] break-words">
            Your Wedding,
            <br />
            <span className="text-amber">Documented</span>
          </h2>
          <p className="mt-8 sm:mt-10 text-foreground/65 max-w-xl mx-auto text-base sm:text-lg">
            Dates fill quickly during the season. Tell us about your day — we'll
            reply within a few hours.
          </p>
          <div className="mt-12 sm:mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
            <a
              href="https://wa.me/919545136425?text=Hi%20Next%20Level%20Photography%2C%20I%20want%20to%20enquire%20about%20wedding%20photography."
              target="_blank"
              rel="noopener noreferrer"
              className="pill pill-amber"
            >
              WhatsApp Us Now
            </a>
            <a href="tel:+919545136425" className="pill pill-ghost">
              +91 95451 36425
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
