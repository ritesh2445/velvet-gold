import { Reveal } from "./Reveal";

const steps = [
  { n: "01", t: "Connect With Us", d: "A relaxed call to understand your vision." },
  { n: "02", t: "Plan Together", d: "We craft the shot list, locations and timeline." },
  { n: "03", t: "We Show Up", d: "Cinematic coverage, candid hearts, no missed moments." },
  { n: "04", t: "Relive Forever", d: "Films, albums and gallery delivered with care." },
];

export function Process() {
  return (
    <section className="py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="eyebrow">The Process</p>
          <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl text-ivory leading-tight">
            From <span className="italic text-gold">Hello</span>
            <br />
            to Heirloom
          </h2>
        </Reveal>

        <div className="mt-20 relative">
          {/* connecting line */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-px bg-gold/30" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 120} className="text-center">
                <div className="mx-auto h-20 w-20 rounded-full border border-gold flex items-center justify-center bg-background relative z-10">
                  <span className="font-serif text-2xl text-gold">{s.n}</span>
                </div>
                <h3 className="mt-8 font-serif text-2xl text-ivory">{s.t}</h3>
                <p className="mt-3 text-sm text-ivory/60 max-w-[220px] mx-auto leading-relaxed">
                  {s.d}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
