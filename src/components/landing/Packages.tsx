import { Reveal } from "./Reveal";

const packages = [
  {
    name: "Silver",
    tagline: "Intimate moments, beautifully captured.",
    price: "₹25k",
    features: [
      "1 Photographer · 8 hrs",
      "300+ edited photos",
      "Online private gallery",
      "Highlight reel (60s)",
      "Delivery in 30 days",
    ],
  },
  {
    name: "Gold",
    tagline: "Our most loved — full wedding craft.",
    price: "₹45k",
    featured: true,
    features: [
      "2 Photographers + Videographer",
      "Full-day coverage · 12 hrs",
      "600+ edited photos",
      "Cinematic film (3–5 min)",
      "Premium 30-page album",
      "Instagram reels x 2",
    ],
  },
  {
    name: "Platinum",
    tagline: "Multi-day, multi-event signature treatment.",
    price: "₹75k+",
    features: [
      "Full team coverage",
      "Multi-day events covered",
      "1000+ edited photos",
      "Cinematic film + teaser",
      "Drone coverage included",
      "Hand-bound luxury album",
      "Dedicated lead photographer",
    ],
  },
];

export function Packages() {
  return (
    <section id="packages" className="py-28 lg:py-40 bg-ink">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="eyebrow">Investment</p>
          <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl text-ivory leading-tight">
            Thoughtfully
            <br />
            <span className="italic text-gold">Tailored</span> Packages
          </h2>
          <p className="mt-6 text-ivory/60 max-w-md mx-auto">
            Three starting points — every package is shaped around your story,
            venue and rituals.
          </p>
        </Reveal>

        <div className="mt-20 grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {packages.map((p, i) => (
            <Reveal key={p.name} delay={i * 120}>
              <div
                className={`relative h-full p-10 lg:p-12 flex flex-col border transition-all duration-500 ${
                  p.featured
                    ? "border-gold bg-background lg:scale-[1.04] lg:-my-3"
                    : "border-border bg-background hover:border-gold/50"
                }`}
              >
                {p.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-background text-[0.6rem] uppercase tracking-[0.3em] px-4 py-1.5">
                    Most Popular
                  </span>
                )}
                <div>
                  <h3 className="font-serif text-3xl text-ivory">{p.name}</h3>
                  <p className="mt-3 text-sm text-ivory/55 italic font-serif">
                    {p.tagline}
                  </p>
                </div>
                <div className="mt-8 mb-8">
                  <div className="font-serif text-6xl text-gold leading-none">
                    {p.price}
                  </div>
                  <div className="text-[0.65rem] uppercase tracking-[0.3em] text-ivory/40 mt-3">
                    Starting from
                  </div>
                </div>
                <div className="hairline mb-8" />
                <ul className="space-y-4 flex-1">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-sm text-ivory/75"
                    >
                      <span className="text-gold mt-2 inline-block w-3 h-px bg-gold flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/919545136425?text=Hi%20Next%20Level%20Photography%2C%20I%20want%20to%20enquire%20about%20the%20package."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-10 block text-center py-4 text-[0.7rem] uppercase tracking-[0.3em] transition-colors ${
                    p.featured
                      ? "bg-gold text-background hover:bg-gold/90"
                      : "border border-gold/60 text-gold hover:bg-gold hover:text-background"
                  }`}
                >
                  Enquire Now
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
