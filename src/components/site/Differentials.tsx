import { Bus, Ruler, Landmark, Server, Layers, LifeBuoy } from "lucide-react";
import { Reveal, SectionLabel } from "./Reveal";

const cards = [
  { icon: Bus, title: "Especialistas em Mobilidade Urbana", text: "Domínio real da operação de transporte público." },
  { icon: Ruler, title: "Desenvolvimento sob medida", text: "Nada de template: cada sistema nasce do processo do cliente." },
  { icon: Landmark, title: "Projetos para Governo", text: "Experiência com exigências legais, LGPD, LAI e auditoria." },
  { icon: Layers, title: "Experiência em grandes operações", text: "Volumes altos, múltiplas unidades e usuários simultâneos." },
  { icon: Server, title: "Arquitetura escalável", text: "Infraestrutura em cloud, APIs e integrações resilientes." },
  { icon: LifeBuoy, title: "Suporte contínuo", text: "Acompanhamento, evolução e melhoria após o go-live." },
];

export function Differentials() {
  return (
    <section className="py-28 lg:py-36">
      <div className="mx-auto w-[min(1200px,92vw)]">
        <Reveal>
          <SectionLabel>Diferenciais</SectionLabel>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 max-w-[20ch] text-balance font-display text-[clamp(2rem,4.2vw,3.2rem)] font-semibold leading-[1.02]">
            Por que operações críticas <span className="text-gradient">escolhem a Nobili</span>.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={0.05 * i} y={30}>
              <article className="glow-ring h-full rounded-3xl glass p-6 transition-transform duration-500 hover:-translate-y-1">
                <span className="grid size-10 place-items-center rounded-xl border border-border">
                  <c.icon className="size-4.5 text-foreground" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold leading-snug">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
