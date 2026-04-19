import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

type Pkg = {
  name: string;
  category: "production" | "post-lab";
  tagline: string;
};

const items: Pkg[] = [
  { name: "Drone Shoot", category: "production", tagline: "Sky-high perspectives in 4K" },
  { name: "Maternity", category: "production", tagline: "Celebrating new life" },
  { name: "Outdoor Shoots", category: "production", tagline: "Nature as your backdrop" },
  { name: "Modeling & Fashion", category: "production", tagline: "Editorial grade portfolios" },
  { name: "LED Wall Setup", category: "production", tagline: "Immersive event visuals" },
  { name: "Cinematic Reels", category: "post-lab", tagline: "Same day edit, trending" },
  { name: "Photo Editing", category: "post-lab", tagline: "Retouching, color grade" },
  { name: "Video Editing", category: "post-lab", tagline: "Documentary, highlights" },
  { name: "Album Design", category: "post-lab", tagline: "Premium graphic design" },
  { name: "Premium Framing", category: "post-lab", tagline: "Home delivery, secure" },
];

export function Packages() {
  return (
    <section id="events" className="py-28 lg:py-40 bg-ink">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
        <div className="flex items-end justify-between gap-8 flex-wrap mb-16">
          <div>
            <Reveal>
              <p className="eyebrow">End-to-End Solutions</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-8 display text-[clamp(2.5rem,7vw,6rem)]">
                Beyond
                <br />
                The Shutter
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <div className="text-right">
              <div className="label-cap text-amber">Instant Quote</div>
              <div className="label-cap text-foreground/60 mt-2">24/7 Support</div>
            </div>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {items.map((p, i) => (
            <Reveal key={p.name} delay={i * 50}>
              <a
                href="https://wa.me/919545136425"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col h-full p-8 lg:p-10 bg-ink hover:bg-background transition-all duration-500 hover-lift"
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="label-cap text-amber">
                    {p.category === "production" ? "Production" : "Post-Lab"}
                  </span>
                  <span className="text-foreground/30 group-hover:text-amber transition-colors">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
                <h3 className="display text-3xl lg:text-4xl">{p.name}</h3>
                <p className="mt-4 label-cap text-foreground/55">{p.tagline}</p>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-12 flex justify-center">
          <a
            href="https://wa.me/919545136425?text=Hi%20Next%20Level%20Photography%2C%20I%20want%20a%20quote."
            target="_blank"
            rel="noopener noreferrer"
            className="pill pill-amber"
          >
            Chat on WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
