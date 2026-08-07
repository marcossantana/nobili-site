import { motion, useScroll, useTransform, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Reveal, SectionLabel } from "./Reveal";
import { ArrowUpRight } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";

type Project = {
  n: string;
  title: string;
  desc: string;
  note?: string;
  tags: string[];
  visual: "health" | "mobility" | "student" | "transparency" | "editorial" | "ethics";
};

const projects: Project[] = [
  {
    n: "01",
    title: "e-Pront",
    desc: "Sistema completo de prontuário eletrônico para hospitais e unidades de saúde.",
    tags: ["Saúde", "Prontuário", "Multiunidade"],
    visual: "health",
  },
  {
    n: "02",
    title: "Sistema de Gestão de Frota",
    desc: "Desenvolvido para empresa privada, com gestão operacional, cadastros, fiscalização e indicadores.",
    tags: ["Gestão operacional", "Cadastros", "Fiscalização", "Indicadores"],
    visual: "mobility",
  },
  {
    n: "03",
    title: "Portal do Estudante",
    desc: "Sistema completo de recadastro/revalidação estudantil, com fluxos inteligentes para garantia da meia passagem e emissão de novos cartões.",
    note: "ATUV (Vitória da Conquista/BA) e Via Feira (Feira de Santana/BA)",
    tags: ["Recadastro", "Revalidação", "Fluxos inteligentes", "Meia passagem"],
    visual: "student",
  },
  {
    n: "04",
    title: "Portal da Transparência",
    desc: "Portais públicos modernos, aderentes à LGPD e à LAI, integrados a sistemas públicos e em acordo com as exigências do MP.",
    tags: ["LGPD", "LAI", "Integrações", "MP"],
    visual: "transparency",
  },
  {
    n: "05",
    title: "TTI",
    desc: "Portal editorial multilíngue com CMS completo, SEO automático e newsletter.",
    tags: ["Multilíngue", "CMS", "SEO", "Newsletter"],
    visual: "editorial",
  },
  {
    n: "06",
    title: "SallesVox",
    desc: "Plataforma de Ouvidoria, Compliance e Canais de Ética para empresas e órgãos públicos.",
    tags: ["Ouvidoria", "Compliance", "Canal de ética"],
    visual: "ethics",
  },
];

const healthMetrics = [
  { value: 100, unit: "k+", label: "atendimentos" },
  { value: 5, unit: "k+", label: "receitas" },
  { value: 10, unit: "k+", label: "cidadãos" },
  { value: 20, unit: "k+", label: "evolução" },
];

function MetricCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [n, setN] = useState(value * 0.9);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(value * (0.9 + 0.1 * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {Math.round(n)}
      {suffix}
    </span>
  );
}

function Visual({ kind }: { kind: Project["visual"] }) {
  const common = "relative h-full w-full overflow-hidden rounded-3xl border border-border glass p-6";

  const rows = (n: number, w: number[]) => (
    <div className="space-y-2">
      {Array.from({ length: n }).map((_, i) => (
        <div
          key={i}
          className="h-8 rounded-lg border border-border bg-foreground/[0.02]"
          style={{ width: `${w[i % w.length]}%` }}
        />
      ))}
    </div>
  );

  return (
    <div className={common}>
      <div
        className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full blur-3xl"
        style={{ background: "var(--gradient-soft)" }}
        aria-hidden
      />
      <div className="relative flex h-full flex-col gap-4">
        <div className="flex items-center gap-1.5">
          {["#3a3a3a", "#2e2e2e", "#242424"].map((c) => (
            <span key={c} className="size-2 rounded-full" style={{ backgroundColor: c }} />
          ))}
          <span className="ml-2 font-mono text-[10px] text-muted-foreground">nobili · app</span>
        </div>

        {kind === "health" && (
          <div className="grid flex-1 grid-cols-3 gap-3">
            <div className="col-span-1 space-y-2">{rows(5, [100, 80, 92, 70, 88])}</div>
            <div className="col-span-2 rounded-xl border border-border bg-foreground/[0.02] p-4">
              <div className="h-2 w-24 rounded-full bg-foreground/15" />
              <div className="mt-4 grid grid-cols-2 gap-3">
                {healthMetrics.map((m) => (
                  <div key={m.label} className="rounded-lg border border-border p-3">
                    <p className="font-display text-lg font-semibold leading-none">
                      <MetricCounter value={m.value} suffix={m.unit} />
                    </p>
                    <p className="mt-1.5 text-[11px] text-muted-foreground">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {kind === "mobility" && (
          <div className="grid flex-1 grid-cols-2 gap-3">
            <div className="rounded-xl border border-border bg-[#0b0b0f] p-3">
              <svg viewBox="0 0 200 120" className="h-full w-full">
                <path
                  d="M10 100 C 60 90, 70 50, 110 46 S 170 56, 194 20"
                  fill="none"
                  stroke="var(--violet)"
                  strokeWidth="2.5"
                />
                {[
                  [110, 46],
                  [60, 88],
                ].map(([x, y], i) => (
                  <circle key={i} cx={x} cy={y} r="3.5" fill="white" />
                ))}
              </svg>
            </div>
            <div className="space-y-2">{rows(4, [100, 86, 94, 72])}</div>
          </div>
        )}

        {kind === "student" && (
          <div className="grid flex-1 grid-cols-3 gap-3">
            {["Dados", "Documentos", "Aprovação"].map((t, i) => (
              <div key={t} className="rounded-xl border border-border bg-foreground/[0.02] p-4">
                <p className="font-mono text-[10px] text-muted-foreground">etapa 0{i + 1}</p>
                <p className="mt-2 text-sm font-medium">{t}</p>
                <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-foreground/10">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${[100, 70, 35][i]}%`, background: "var(--gradient-brand)" }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {kind === "transparency" && (
          <div className="flex-1 rounded-xl border border-border bg-foreground/[0.02] p-4">
            <div className="grid grid-cols-4 gap-2">
              {["Despesas", "Receitas", "Contratos", "Licitações", "Servidores", "Diárias", "Convênios", "Obras"].map(
                (t) => (
                  <div key={t} className="rounded-lg border border-border p-3 text-[11px] text-muted-foreground">
                    {t}
                  </div>
                ),
              )}
            </div>
          </div>
        )}

        {kind === "editorial" && (
          <div className="grid flex-1 grid-cols-3 gap-3">
            <div className="col-span-2 rounded-xl border border-border bg-foreground/[0.02] p-4">
              <div className="h-2 w-32 rounded-full bg-foreground/15" />
              <div className="mt-3 space-y-2">
                {[100, 92, 80, 96, 60].map((w, i) => (
                  <div key={i} className="h-1.5 rounded-full bg-foreground/[0.07]" style={{ width: `${w}%` }} />
                ))}
              </div>
            </div>
            <div className="space-y-2">
              {["PT", "EN", "ES"].map((l) => (
                <div key={l} className="rounded-lg border border-border p-3 font-mono text-[11px] text-muted-foreground">
                  {l}
                </div>
              ))}
            </div>
          </div>
        )}

        {kind === "ethics" && (
          <div className="grid flex-1 grid-cols-3 gap-3">
            <div className="col-span-1 space-y-2">{rows(4, [100, 84, 92, 76])}</div>
            <div className="col-span-2 rounded-xl border border-border bg-foreground/[0.02] p-4">
              <p className="text-[11px] text-muted-foreground">Manifestações por status</p>
              <div className="mt-4 flex h-24 items-end gap-2">
                {[40, 72, 55, 88, 64, 92].map((h, i) => (
                  <span
                    key={i}
                    className="w-full rounded-t"
                    style={{ height: `${h}%`, background: "var(--gradient-brand)", opacity: 0.75 }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectRow({ p, index }: { p: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const flip = index % 2 === 1;

  return (
    <div
      ref={ref}
      className="grid items-center gap-10 border-t border-border py-16 lg:grid-cols-2 lg:gap-16 lg:py-24"
    >
      <Reveal className={flip ? "lg:order-2" : ""}>
        <span className="font-mono text-xs text-muted-foreground">Projeto {p.n}</span>
        <h3 className="mt-4 font-display text-[clamp(1.8rem,3.4vw,2.7rem)] font-semibold leading-[1.05]">
          {p.title}
        </h3>
        <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-muted-foreground">{p.desc}</p>
        {p.note && (
          <p className="mt-3 max-w-lg text-[13px] text-muted-foreground/70">{p.note}</p>
        )}
        <ul className="mt-6 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <li
              key={t}
              className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground"
            >
              {t}
            </li>
          ))}
        </ul>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-foreground"
        >
          Falar sobre um projeto assim
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </Reveal>

      <motion.div style={{ y }} className={flip ? "lg:order-1" : ""}>
        <Reveal delay={0.1} y={40}>
          <div className="h-[300px] sm:h-[340px]">
            <Visual kind={p.visual} />
          </div>
        </Reveal>
      </motion.div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projetos" className="py-28 lg:py-36">
      <div className="mx-auto w-[min(1200px,92vw)]">
        <Reveal>
          <SectionLabel>Projetos em destaque</SectionLabel>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 max-w-[20ch] text-balance font-display text-[clamp(2rem,4.2vw,3.2rem)] font-semibold leading-[1.02]">
            Plataformas em produção, <span className="text-gradient">operando todos os dias</span>.
          </h2>
        </Reveal>

        <div className="mt-12">
          {projects.map((p, i) => (
            <ProjectRow key={p.n} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
