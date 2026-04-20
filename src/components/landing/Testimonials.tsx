import { Reveal } from "./Reveal";

const reviews = [
  {
    quote: "We viewed our wedding photos and cried. It wasn't just photos, it was a time machine.",
    name: "Vinay & Jaya",
    role: "Wedding · 2025",
  },
  {
    quote: "The team understood our brand voice instantly. The campaign visuals are world-class.",
    name: "Amit S.",
    role: "Brand Campaign",
  },
  {
    quote: "The drone shots for our resort were breathtaking. Next Level is an understatement.",
    name: "Meera V.",
    role: "Commercial Shoot",
  },
];

export function Testimonials() {
  return (
    <section id="albums" className="py-20 lg:py-40">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-6 lg:px-10">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-12 lg:mb-16">
          <div className="min-w-0">
            <Reveal>
              <p className="eyebrow">Social Proof</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-6 sm:mt-8 display text-[clamp(2rem,7vw,6rem)] break-words">
                Words From
                <br />
                Clients
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <div className="text-right">
              <div className="display text-4xl sm:text-5xl text-amber">4.9 ★</div>
              <div className="label-cap text-foreground/60 mt-2">230+ Google Reviews</div>
            </div>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 100}>
              <div className="relative bg-surface p-7 sm:p-10 h-full hover-lift overflow-hidden">
                <div className="absolute -top-6 -left-2 display text-[8rem] sm:text-[10rem] text-amber/10 leading-none select-none">
                  &ldquo;
                </div>
                <div className="relative">
                  <div className="flex gap-1 text-amber">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <span key={k}>★</span>
                    ))}
                  </div>
                  <p className="mt-6 sm:mt-8 text-base sm:text-lg text-foreground/85 leading-relaxed">
                    {r.quote}
                  </p>
                  <div className="mt-10 pt-6 border-t border-border flex items-center gap-4">
                    <div className="h-11 w-11 rounded-full border border-amber/40 flex items-center justify-center bg-amber/10">
                      <span className="display text-amber text-sm">
                        {r.name
                          .split(" ")
                          .map((p) => p[0])
                          .join("")
                          .slice(0, 2)}
                      </span>
                    </div>
                    <div>
                      <div className="label-cap text-foreground">{r.name}</div>
                      <div className="label-cap text-foreground/50 mt-1 !text-[0.6rem]">
                        {r.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
