import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

const services = [
  { name: "Wedding Photography", price: "₹ 30,000", popular: true },
  { name: "Pre-Wedding Shoot", price: "₹ 25,000", popular: false },
  { name: "Cinematic Films", price: "₹ 30,000", popular: true },
  { name: "Engagement Coverage", price: "₹ 20,000", popular: false },
  { name: "Premium Albums", price: "₹ 15,000", popular: false },
  { name: "Corporate Events", price: "₹ 15,000", popular: false },
];

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-40">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-6 lg:px-10">
        <Reveal>
          <p className="eyebrow">Our Expertise</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-6 sm:mt-8 display text-foreground text-[clamp(2rem,7vw,6rem)] max-w-5xl">
            Signature
            <br />
            Services
          </h2>
        </Reveal>

        <div className="mt-12 lg:mt-24 border-t border-border">
          {services.map((s, i) => (
            <Reveal key={s.name} delay={i * 60}>
              <a
                href="#contact"
                className="service-row group flex items-center justify-between gap-4 py-6 lg:py-9 border-b border-border hover:bg-foreground/[0.02] transition-colors"
              >
                <div className="flex items-baseline gap-3 sm:gap-6 lg:gap-10 min-w-0 flex-1">
                  <span className="label-cap text-foreground/40 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.popular && (
                    <span className="badge-popular hidden md:inline-block shrink-0">Popular</span>
                  )}
                  <h3 className="display text-lg sm:text-2xl md:text-3xl lg:text-5xl min-w-0 break-words">
                    {s.name}
                  </h3>
                </div>
                <div className="flex items-center gap-4 lg:gap-10 shrink-0">
                  <span className="hidden lg:block label-cap text-foreground/60">
                    Starting from <span className="text-foreground">{s.price}</span>
                  </span>
                  <span className="row-arrow inline-flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-border">
                    <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-10 flex justify-end">
          <a href="#contact" className="pill pill-ghost">
            Explore All
          </a>
        </Reveal>
      </div>
    </section>
  );
}
