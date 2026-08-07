import { Palette, Monitor, MousePointerClick, MapPin, Mail, LineChart, Share2, FileImage } from "lucide-react";
import { Reveal, SectionLabel } from "./Reveal";

const cards = [
  { icon: Palette, title: "Identidade Visual", text: "Sistemas de marca coerentes, aplicáveis em qualquer canal." },
  { icon: Monitor, title: "Websites", text: "Sites rápidos, acessíveis e prontos para escalar conteúdo." },
  { icon: MousePointerClick, title: "Landing Pages", text: "Páginas focadas em conversão e mensuração." },
  { icon: MapPin, title: "Google Meu Negócio", text: "Presença local otimizada e mantida com consistência." },
  { icon: Mail, title: "E-mail Corporativo", text: "Contas profissionais, entregabilidade e segurança." },
  { icon: LineChart, title: "Analytics", text: "Instrumentação de dados e relatórios que orientam decisão." },
  { icon: Share2, title: "Redes Sociais", text: "Gestão editorial alinhada ao posicionamento da marca." },
  { icon: FileImage, title: "Materiais Gráficos", text: "Peças digitais e impressas dentro do sistema visual." },
];

export function DigitalPresence() {
  return (
    <section id="presenca-digital" className="relative py-28 lg:py-36">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(45% 45% at 80% 20%, color-mix(in oklab, var(--azure) 12%, transparent), transparent 70%)",
        }}
      />
      <div className="relative mx-auto w-[min(1200px,92vw)]">
        <Reveal>
          <SectionLabel>Presença digital</SectionLabel>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 max-w-[22ch] text-balance font-display text-[clamp(2rem,4.2vw,3.2rem)] font-semibold leading-[1.02]">
            Uma marca forte também precisa{" "}
            <span className="text-gradient">existir no ambiente digital</span>.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={0.04 * i} y={28}>
              <article className="h-full rounded-2xl border border-border bg-foreground/[0.02] p-5 transition-all duration-500 hover:-translate-y-1 hover:bg-foreground/[0.04]">
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
