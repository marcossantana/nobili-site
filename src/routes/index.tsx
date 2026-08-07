import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Solutions } from "@/components/site/Solutions";
import { Mobility } from "@/components/site/Mobility";
import { Projects } from "@/components/site/Projects";
import { Capabilities } from "@/components/site/Capabilities";
import { DigitalPresence } from "@/components/site/DigitalPresence";
import { Differentials } from "@/components/site/Differentials";
import { Clients } from "@/components/site/Clients";
import { Stats } from "@/components/site/Stats";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";
import { CursorGlow } from "@/components/site/CursorGlow";

const title = "Nobili — Soluções digitais para mobilidade urbana e gestão pública";
const description =
  "Desenvolvemos sistemas, aplicativos e plataformas para governos, empresas e mobilidade urbana. Também cuidamos da presença digital da sua marca.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Nobili",
          description,
          areaServed: "BR",
          knowsAbout: [
            "Mobilidade urbana",
            "Gestão pública",
            "Desenvolvimento de sistemas",
            "Presença digital",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <CursorGlow />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Marquee />
        <Solutions />
        <Mobility />
        <Projects />
        <Capabilities />
        <DigitalPresence />
        <Differentials />
        <Clients />
        <Stats />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
