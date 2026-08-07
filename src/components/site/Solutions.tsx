import { Code2, Bus, Landmark, Globe } from "lucide-react";
import { Reveal, SectionLabel } from "./Reveal";

const cards = [
  {
    icon: Code2,
    title: "Desenvolvimento de Sistemas",
    items: [
      "Sistemas sob medida",
      "Aplicações web",
      "Painéis administrativos",
      "Automação",
      "Integrações",
    ],
  },
  {
    icon: Bus,
    title: "Mobilidade Urbana",
    items: [
      "Gestão de transporte",
      "Integrações",
      "Revalidação/Recadastro",
      "Fiscalização",
      "Dashboards",
      "Aplicativos",
    ],
  },
  {
    icon: Landmark,
    title: "Gestão Pública",
    items: [
      "Prontuário eletrônico",
      "Portal da Transparência",
      "Portais institucionais",
      "Ouvidoria",
      "Protocolos",
    ],
  },
  {
    icon: Globe,
    title: "Presença Digital",
    items: [
      "Sites",
      "Landing pages",
      "Gestão de redes sociais",
      "Google Meu Negócio",
      "Analytics",
      "Material gráfico",
      "E-mail profissional",
      "Branding",
    ],
  },
];

export function Solutions() {
  return (
    <section id="solucoes" className="relative py-28 lg:py-36">
      <div className="mx-auto w-[min(1200px,92vw)]">
        <Reveal>
          <SectionLabel>Soluções inteligentes</SectionLabel>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 max-w-[18ch] text-balance font-display text-[clamp(2rem,4.2vw,3.2rem)] font-semibold leading-[1.02]">
            Criamos tecnologia para resolver <span className="text-gradient">problemas reais</span>.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={0.06 * i}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-border bg-foreground/[0.02] p-7 transition-colors duration-500 hover:bg-foreground/[0.04]">
                <div
                  className="pointer-events-none absolute -right-24 -top-24 size-56 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
                  style={{ background: "var(--gradient-soft)" }}
                  aria-hidden
                />
                <div className="relative">
                  <span className="grid size-11 place-items-center rounded-2xl border border-border glass">
                    <c.icon className="size-5 text-foreground" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold">{c.title}</h3>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {c.items.map((it) => (
                      <li key={it} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span
                          className="size-1 shrink-0 rounded-full"
                          style={{ background: "var(--gradient-brand)" }}
                          aria-hidden
                        />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
