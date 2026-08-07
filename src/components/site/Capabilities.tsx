import { Check } from "lucide-react";
import { Reveal, SectionLabel } from "./Reveal";

const items = [
  "Sistemas Web",
  "Aplicativos",
  "APIs",
  "Cloud",
  "Inteligência Artificial",
  "Banco de Dados",
  "Dashboards",
  "UX/UI",
  "Performance",
  "Segurança",
  "Analytics",
  "SEO",
  "Integrações",
  "Automação",
  "LGPD",
];

export function Capabilities() {
  return (
    <section className="border-y border-border py-28 lg:py-36">
      <div className="mx-auto w-[min(1200px,92vw)]">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <Reveal>
              <SectionLabel>Capacidades</SectionLabel>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 font-display text-[clamp(2rem,4.2vw,3.2rem)] font-semibold leading-[1.02]">
                Tecnologia que <span className="text-gradient">gera resultado</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted-foreground">
                Um time completo, do banco de dados à interface, com arquitetura pensada para
                escalar e sustentar operações de missão crítica.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-foreground/[0.06] sm:grid-cols-3">
            {items.map((it, i) => (
              <Reveal key={it} delay={0.03 * i} y={16} blur={false}>
                <div className="group flex h-full items-center gap-2.5 bg-background px-5 py-6 transition-colors duration-500 hover:bg-foreground/[0.03]">
                  <Check className="size-4 shrink-0 text-foreground opacity-60 transition-opacity group-hover:opacity-100" />
                  <span className="text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                    {it}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
