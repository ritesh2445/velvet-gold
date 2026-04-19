import aboutImg from "@/assets/about.jpg";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left: Portrait */}
        <Reveal className="relative max-w-md mx-auto lg:mx-0">
          <div className="absolute -top-5 -left-5 w-full h-full border border-gold/40" />
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              src={aboutImg}
              alt="Sameer — Lead photographer"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-background border border-gold px-6 py-4 flex flex-col items-center">
            <span className="font-serif text-3xl text-gold leading-none">
              4.9
            </span>
            <span className="text-[0.6rem] uppercase tracking-[0.3em] text-ivory/70 mt-2">
              Google Rated
            </span>
          </div>
        </Reveal>

        {/* Right: Copy */}
        <Reveal delay={150}>
          <p className="eyebrow">Our Story</p>
          <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl text-ivory leading-tight">
            Sameer & Team —
            <br />
            <span className="italic text-gold">Photographers</span> by Passion
          </h2>
          <div className="mt-10 space-y-6 text-ivory/70 leading-relaxed max-w-xl">
            <p>
              Born from a love for storytelling, Next Level Photography was
              founded in Amravati with one quiet promise — to honour every
              ritual, every glance, every laugh with the frame it deserves.
            </p>
            <p>
              Over the last six years our small studio has been trusted with
              more than 230 weddings across Maharashtra and beyond, blending
              candid moments with cinematic craft and editorial restraint.
            </p>
            <p>
              We don't chase trends. We chase truth — the kind that holds up
              twenty years from now, when you flip the album and your hand
              still finds theirs.
            </p>
          </div>
          <div className="mt-10 flex items-center gap-5">
            <div className="gold-divider" />
            <span className="font-serif italic text-ivory/80">
              — Sameer, Lead Photographer
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
