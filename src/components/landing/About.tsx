import { Reveal } from "./Reveal";
import aboutImg from "@/assets/about-img.jpg";

const expertise = [
  {
    label: "Weddings",
    title: "The Main Event",
    body: "Capturing the grandeur, the tears, and the joy. Editorial style wedding photography across Maharashtra.",
  },
  {
    label: "Cinematography",
    title: "Motion Films",
    body: "Your story in 4K. Immerse yourself in the sound and rhythm of your day with cinematic films.",
  },
  {
    label: "Pre-Weddings",
    title: "Love Stories",
    body: "Chemistry before the chaos. Cinematic couple shoots in exotic, hand-picked locations.",
  },
  {
    label: "Candid",
    title: "Raw Emotions",
    body: "Unposed, raw, and real emotions captured from the shadows — the moments you'll treasure forever.",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 lg:py-40 bg-ink">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-[42%_58%] gap-12 lg:gap-20 items-start">
          <Reveal>
            <div className="relative group overflow-hidden">
              <div className="overflow-hidden">
                <img
                  src={aboutImg}
                  alt="Indian bride and groom under a floral mandap by the sea"
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="w-full aspect-[3/4] object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 ring-1 ring-inset ring-amber/0 group-hover:ring-amber/30 transition-all duration-700 pointer-events-none" />
              <div className="absolute -bottom-6 -right-6 bg-amber text-background px-6 py-5 hidden md:block animate-float">
                <div className="display text-3xl">4.9 ★</div>
                <div className="label-cap !text-[0.6rem] mt-1">Google Rated</div>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="eyebrow">Curated Services</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-6 sm:mt-8 display text-[clamp(2rem,5.5vw,4.5rem)] break-words">
                Our
                <br />
                Expertise
              </h2>
            </Reveal>

            <div className="mt-10 sm:mt-12 grid sm:grid-cols-2 gap-px bg-border">
              {expertise.map((e, i) => (
                <Reveal key={e.label} delay={i * 80}>
                  <div className="bg-ink p-6 sm:p-8 h-full hover-lift">
                    <div className="label-cap text-amber">{e.label}</div>
                    <h3 className="mt-3 sm:mt-4 display text-xl sm:text-2xl">{e.title}</h3>
                    <p className="mt-3 sm:mt-4 text-sm text-foreground/65 leading-relaxed">
                      {e.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
