import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Marquee } from "@/components/landing/Marquee";
import { About } from "@/components/landing/About";
import { Services } from "@/components/landing/Services";
import { Process } from "@/components/landing/Process";
import { Portfolio } from "@/components/landing/Portfolio";
import { Testimonials } from "@/components/landing/Testimonials";
import { Packages } from "@/components/landing/Packages";
import { CTA } from "@/components/landing/CTA";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";
import { WhatsAppFab } from "@/components/landing/WhatsAppFab";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Next Level Photography Amravati — Cinematic Wedding Photography & Films",
      },
      {
        name: "description",
        content:
          "Award-rated wedding photography & cinematic films in Amravati. 230+ couples, 4.9★ Google rated. By Sameer & team. Book your date today.",
      },
      {
        property: "og:title",
        content: "Next Level Photography — Cinematic Weddings in Amravati",
      },
      {
        property: "og:description",
        content:
          "Luxury wedding photography & cinematic films. 230+ weddings captured across Maharashtra. 4.9★ Google rated.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <About />
      <Portfolio />
      <Packages />
      <Testimonials />
      <Process />
      <CTA />
      <Contact />
      <Footer />
      <WhatsAppFab />
    </main>
  );
}
