import { Reveal, SectionLabel } from "./Reveal";
import {
  Gauge,
  RefreshCcw,
  Smartphone,
  BarChart3,
  Plug,
  Brain,
  Workflow,
  GitBranch,
} from "lucide-react";

const cards = [
  { icon: Gauge, title: "Gestão Operacional", text: "Controle de frota, linhas, escalas e ocorrências em um único painel." },
  { icon: RefreshCcw, title: "Recadastro Inteligente", text: "Fluxos guiados, validação documental e triagem automatizada." },
  { icon: Smartphone, title: "Aplicativos", text: "Apps para usuários, operadores e fiscalização em campo." },
  { icon: BarChart3, title: "Dashboards", text: "Indicadores em tempo real para decisão rápida e auditável." },
  { icon: Plug, title: "Integrações", text: "Conexão com sistemas legados, bilhetagem e bases públicas." },
  { icon: Brain, title: "Business Intelligence", text: "Modelagem de dados e análises sobre demanda e operação." },
  { icon: Workflow, title: "Automação", text: "Processos manuais convertidos em rotinas digitais confiáveis." },
  { icon: GitBranch, title: "Fluxos Digitais", text: "Jornadas end-to-end do cidadão ao órgão gestor." },
];

export function Mobility() {
  return (
    <section id="sobre" className="relative overflow-hidden border-y border-border py-28 lg:py-36">
      <svg
        viewBox="0 0 1200 600"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.22]"
        aria-hidden
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="m-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--violet)" />
            <stop offset="100%" stopColor="var(--azure)" />
          </linearGradient>
        </defs>
        {Array.from({ length: 16 }).map((_, i) => (
          <line key={i} x1="0" y1={i * 40} x2="1200" y2={i * 40} stroke="white" strokeOpacity="0.05" />
        ))}
        {Array.from({ length: 30 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 40} y1="0" x2={i * 40} y2="600" stroke="white" strokeOpacity="0.05" />
        ))}
        <path
          d="M-20 480 C 200 440, 260 260, 480 240 S 780 300, 900 160 L 1220 100"
          fill="none"
          stroke="url(#m-grad)"
          strokeWidth="3"
        />
        <path
          d="M-20 120 C 240 180, 300 400, 560 420 S 900 460, 1220 380"
          fill="none"
          stroke="url(#m-grad)"
          strokeWidth="2"
          strokeOpacity="0.5"
          strokeDasharray="8 10"
        />
      </svg>
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(50% 60% at 20% 20%, color-mix(in oklab, var(--violet) 14%, transparent), transparent 70%)",
        }}
      />

      <div className="relative mx-auto w-[min(1200px,92vw)]">
        <div className="max-w-2xl">
          <Reveal>
            <SectionLabel>Seção destaque</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 font-display text-[clamp(2.1rem,4.6vw,3.5rem)] font-semibold leading-[1.02]">
              Especialistas em <span className="text-gradient">Mobilidade Urbana</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
              Conhecemos profundamente a operação do transporte público: da bilhetagem ao recadastro
              estudantil, da fiscalização em campo aos indicadores que chegam à gestão. Construímos
              plataformas que suportam grandes volumes e rotinas críticas do dia a dia.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={0.04 * i} y={30}>
              <article className="glow-ring h-full rounded-2xl glass p-5 transition-transform duration-500 hover:-translate-y-1">
                <c.icon className="size-5 text-foreground" />
                <h3 className="mt-4 font-display text-base font-semibold">{c.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{c.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
