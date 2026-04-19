import { Reveal } from "./Reveal";

export function CTA() {
  return (
    <section className="relative py-32 lg:py-44 overflow-hidden">
      <div className="absolute inset-0 radial-gold" />
      <div className="absolute inset-x-0 top-0 hairline" />
      <div className="absolute inset-x-0 bottom-0 hairline" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <p className="eyebrow">Let's Begin</p>
          <h2 className="mt-8 font-serif text-5xl md:text-6xl lg:text-7xl text-ivory leading-[1.05]">
            Your Wedding,
            <br />
            <span className="italic text-gold">Beautifully</span> Documented
          </h2>
          <p className="mt-8 text-ivory/65 max-w-xl mx-auto">
            Dates fill quickly during the season. Tell us about your day — we'll
            reply within a few hours.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="https://wa.me/919545136425?text=Hi%20Next%20Level%20Photography%2C%20I%20want%20to%20enquire%20about%20wedding%20photography."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-background hover:bg-gold/90 transition-colors px-10 py-4 text-[0.7rem] uppercase tracking-[0.3em] font-medium"
            >
              WhatsApp Us Now
            </a>
            <a
              href="tel:+919545136425"
              className="border border-gold/60 text-gold hover:bg-gold hover:text-background transition-colors px-10 py-4 text-[0.7rem] uppercase tracking-[0.3em] font-medium"
            >
              +91 95451 36425
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
