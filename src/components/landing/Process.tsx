import { Reveal } from "./Reveal";

const steps = [
  { n: "01", t: "Connect", d: "A relaxed call to understand your vision and date." },
  { n: "02", t: "Plan", d: "We craft the shot list, locations and timeline together." },
  { n: "03", t: "Capture", d: "Cinematic coverage, candid hearts, no missed moments." },
  { n: "04", t: "Deliver", d: "Films, albums and gallery delivered with care." },
];

export function Process() {
  return (
    <section className="py-20 lg:py-40 border-t border-border">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-[40%_60%] gap-10 lg:gap-12 items-end mb-12 lg:mb-20">
          <div>
            <Reveal>
              <p className="eyebrow">The Process</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-6 sm:mt-8 display text-[clamp(2rem,6vw,5rem)] break-words">
                From Hello
                <br />
                <span className="text-amber">to Heirloom</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <p className="text-foreground/65 text-base sm:text-lg">
              Four simple steps from first message to final delivery — no
              surprises, just craft.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <div className="bg-background p-7 sm:p-10 h-full">
                <div className="display text-6xl sm:text-7xl text-amber/30">{s.n}</div>
                <h3 className="mt-6 sm:mt-8 display text-xl sm:text-2xl">{s.t}</h3>
                <p className="mt-3 sm:mt-4 text-sm text-foreground/65 leading-relaxed">
                  {s.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
