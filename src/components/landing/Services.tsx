import { Reveal } from "./Reveal";

const services = [
  {
    n: "01",
    title: "Wedding Photography",
    desc: "Full-day candid coverage of every ritual, every emotion, every fleeting glance.",
  },
  {
    n: "02",
    title: "Cinematic Videography",
    desc: "Story-driven films cut like cinema — colour-graded, scored, unforgettable.",
  },
  {
    n: "03",
    title: "Pre-Wedding Shoots",
    desc: "Editorial location shoots that capture your story before the celebration begins.",
  },
  {
    n: "04",
    title: "Premium Albums",
    desc: "Hand-bound, archival-quality wedding albums printed on museum-grade paper.",
  },
  {
    n: "05",
    title: "Instagram Reels",
    desc: "Vertical highlight reels designed for social — fast turnaround, premium edit.",
  },
  {
    n: "06",
    title: "Engagement & Events",
    desc: "From sangeet to mehendi, every pre-wedding event covered with the same craft.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-28 lg:py-40 bg-ink">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="eyebrow">What We Do</p>
          <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl text-ivory leading-tight">
            Crafted Services,
            <br />
            <span className="italic text-gold">Cinematic</span> Outcomes
          </h2>
        </Reveal>

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <div className="service-card group relative bg-ink p-10 lg:p-12 h-full min-h-[280px] flex flex-col justify-between transition-colors duration-500 hover:bg-background">
                <span className="font-serif text-7xl text-ivory/8 leading-none absolute top-6 right-6 select-none">
                  {s.n}
                </span>
                <div className="relative">
                  <h3 className="font-serif text-2xl lg:text-3xl text-ivory">
                    {s.title}
                  </h3>
                  <div className="service-underline mt-3 h-px bg-gold" />
                </div>
                <p className="relative mt-8 text-ivory/65 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
