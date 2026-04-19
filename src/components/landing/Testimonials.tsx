import { Star } from "lucide-react";
import { Reveal } from "./Reveal";

const reviews = [
  {
    quote:
      "Sameer and his team captured our wedding so beautifully. Every photo feels like a movie still — the emotions, the light, everything. Highly recommended.",
    name: "Pooja & Aniket",
    event: "Wedding · Amravati",
    initials: "PA",
  },
  {
    quote:
      "Best decision of our wedding! Their candid eye is unmatched and the cinematic film made our families cry. Truly a next level experience.",
    name: "Riya & Karan",
    event: "Pre-Wedding · Lonavala",
    initials: "RK",
  },
  {
    quote:
      "Professional, calm and so creative. Our album turned out to be a heirloom we'll pass on. Worth every rupee — and so much more.",
    name: "Sneha & Dhruv",
    event: "Wedding · Nagpur",
    initials: "SD",
  },
];

export function Testimonials() {
  return (
    <section className="py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="eyebrow">Kind Words</p>
          <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl text-ivory leading-tight">
            Loved by
            <br />
            <span className="italic text-gold">Couples & Families</span>
          </h2>
        </Reveal>

        <div className="mt-20 grid md:grid-cols-3 gap-px bg-border">
          {reviews.map((r, i) => (
            <Reveal key={i} delay={i * 100}>
              <article className="relative bg-background p-10 lg:p-12 h-full overflow-hidden">
                <span className="absolute -top-6 -left-2 font-serif text-[10rem] text-gold/8 leading-none select-none pointer-events-none">
                  "
                </span>
                <div className="relative flex gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-3.5 w-3.5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="relative font-serif italic text-xl text-ivory/85 leading-relaxed">
                  {r.quote}
                </p>
                <div className="relative mt-10 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full border border-gold/60 flex items-center justify-center text-gold font-serif">
                    {r.initials}
                  </div>
                  <div>
                    <div className="text-ivory text-sm">{r.name}</div>
                    <div className="text-[0.65rem] uppercase tracking-[0.25em] text-ivory/50 mt-1">
                      {r.event}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-3">
            <div className="flex items-center gap-3">
              <span className="font-serif text-5xl text-gold leading-none">4.9</span>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
            </div>
            <span className="text-[0.7rem] uppercase tracking-[0.3em] text-ivory/60">
              230+ Reviews on Google
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
