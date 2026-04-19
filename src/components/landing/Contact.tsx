import { Phone, MapPin, Calendar } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  {
    icon: Phone,
    title: "Phone / WhatsApp",
    line1: "+91 95451 36425",
    line2: "Mon — Sun · 9 AM to 9 PM",
    href: "tel:+919545136425",
  },
  {
    icon: MapPin,
    title: "Studio Address",
    line1: "Dreamz Landmark, Rajkamal",
    line2: "Amravati, Maharashtra 444601",
    href: "https://maps.google.com/?q=Dreamz+Landmark+Rajkamal+Amravati",
  },
  {
    icon: Calendar,
    title: "Book Your Date",
    line1: "Reserve early for season",
    line2: "Reply within a few hours",
    href: "https://wa.me/919545136425?text=Hi%20Next%20Level%20Photography%2C%20I%20want%20to%20book%20a%20date.",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-ink border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-3 gap-px bg-border">
        {items.map((it) => (
          <Reveal key={it.title}>
            <a
              href={it.href}
              target={it.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group flex items-start gap-5 p-10 bg-ink hover:bg-background transition-colors h-full"
            >
              <div className="h-12 w-12 rounded-full border border-gold/60 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/10 transition-colors">
                <it.icon className="h-4 w-4 text-gold" />
              </div>
              <div>
                <div className="text-[0.65rem] uppercase tracking-[0.3em] text-gold mb-2">
                  {it.title}
                </div>
                <div className="font-serif text-xl text-ivory">{it.line1}</div>
                <div className="text-sm text-ivory/55 mt-1">{it.line2}</div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
