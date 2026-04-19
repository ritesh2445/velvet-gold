import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import { Reveal } from "./Reveal";

const cells = [
  { src: g1, label: "Bridal Portrait", cls: "lg:col-span-2 lg:row-span-2" },
  { src: g2, label: "Mandap Rituals", cls: "" },
  { src: g3, label: "Pre-Wedding", cls: "" },
  { src: g4, label: "Candid Detail", cls: "" },
  { src: g5, label: "Reception", cls: "" },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-28 lg:py-40 bg-ink">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="eyebrow">Selected Work</p>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl text-ivory leading-tight">
              A Glimpse Into
              <br />
              <span className="italic text-gold">Recent Stories</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="text-[0.7rem] uppercase tracking-[0.3em] text-gold border-b border-gold/40 pb-1 hover:border-gold w-fit"
          >
            Request Full Portfolio →
          </a>
        </Reveal>

        <Reveal delay={150} className="mt-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-3 lg:gap-4 auto-rows-[200px] lg:auto-rows-[260px]">
            {cells.map((c, i) => (
              <figure
                key={i}
                className={`zoom-cell relative overflow-hidden bg-background group ${c.cls}`}
              >
                <img
                  src={c.src}
                  alt={c.label}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <figcaption className="absolute bottom-5 left-5 text-[0.6rem] uppercase tracking-[0.3em] text-gold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  {c.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
