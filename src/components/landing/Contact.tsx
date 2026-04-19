import { Phone, MapPin, Calendar, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    line1: "+91 95451 36425",
    line2: "Mon — Sun · 9 AM to 9 PM",
    href: "tel:+919545136425",
  },
  {
    icon: MapPin,
    label: "Studio Address",
    line1: "Dreamz Landmark, Rajkamal",
    line2: "Amravati, Maharashtra 444601",
    href: "https://maps.google.com/?q=Dreamz+Landmark+Rajkamal+Amravati",
  },
  {
    icon: Calendar,
    label: "Book Your Date",
    line1: "Reserve early for season",
    line2: "Reply within hours",
    href: "https://wa.me/919545136425?text=Hi%20Next%20Level%20Photography%2C%20I%20want%20to%20book%20a%20date.",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-ink border-y border-border">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-10 grid md:grid-cols-3 gap-px bg-border">
        {items.map((it, i) => (
          <Reveal key={it.label} delay={i * 100}>
            <a
              href={it.href}
              target={it.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group flex items-start justify-between gap-6 p-10 bg-ink hover:bg-background transition-all duration-500 h-full"
            >
              <div className="flex items-start gap-5">
                <div className="h-12 w-12 rounded-full border border-amber/50 flex items-center justify-center shrink-0 group-hover:bg-amber group-hover:text-background transition-all">
                  <it.icon className="h-4 w-4" />
                </div>
                <div>
                  <div className="label-cap text-amber mb-3">{it.label}</div>
                  <div className="display text-xl text-foreground">
                    {it.line1}
                  </div>
                  <div className="text-sm text-foreground/55 mt-2">
                    {it.line2}
                  </div>
                </div>
              </div>
              <ArrowUpRight className="h-5 w-5 text-foreground/30 group-hover:text-amber group-hover:rotate-45 transition-all" />
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
