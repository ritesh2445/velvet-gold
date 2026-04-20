import { Reveal } from "./Reveal";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";

const items = [
  { src: g1, n: "01", label: "Bride · Mehndi" },
  { src: g2, n: "02", label: "Couple · Sunset" },
  { src: g3, n: "03", label: "Ceremony · Vows" },
  { src: g4, n: "04", label: "Candid · Joy" },
  { src: g5, n: "05", label: "Reception · Glow" },
  { src: g1, n: "06", label: "Detail · Rings" },
];

export function Portfolio() {
  return (
    <section id="gallery" className="py-20 lg:py-40">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-6 lg:px-10">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div className="min-w-0">
            <Reveal>
              <p className="eyebrow">Archive_2026</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-6 sm:mt-8 display text-[clamp(2rem,7vw,6rem)] break-words">
                Analog
                <br />
                Memories
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <span className="badge-popular">New</span>
          </Reveal>
        </div>

        <div className="mt-10 sm:mt-16 grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3 lg:gap-5">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="zoom-cell relative overflow-hidden bg-surface aspect-[3/4] group">
                <img
                  src={it.src}
                  alt={it.label}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 left-4 label-cap text-foreground/90">
                  {it.n}
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="label-cap text-foreground/90">
                    {it.label}
                  </span>
                  <span className="text-amber">●</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
