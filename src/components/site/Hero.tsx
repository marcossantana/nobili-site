import { motion, useReducedMotion } from "motion/react";
import { WHATSAPP_URL } from "@/lib/site";
import { ArrowRight, Sparkles } from "lucide-react";
import { DashboardComposition } from "./DashboardComposition";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden pb-24 pt-36 lg:pb-32 lg:pt-44">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-[0.55]" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, color-mix(in oklab, var(--violet) 22%, transparent), transparent 70%), radial-gradient(45% 40% at 85% 30%, color-mix(in oklab, var(--azure) 16%, transparent), transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        aria-hidden
        style={{
          background:
            "linear-gradient(90deg, transparent, color-mix(in oklab, var(--violet) 70%, transparent), transparent)",
        }}
      />

      <div className="relative mx-auto grid w-[min(1200px,92vw)] items-center gap-16 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs text-muted-foreground"
          >
            <Sparkles className="size-3.5 text-foreground" />
            Engenharia de software para operações críticas
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26, filter: reduce ? "none" : "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-[16ch] text-balance font-display text-[clamp(2.6rem,6vw,4.6rem)] font-semibold leading-[0.98]"
          >
            Desenvolvemos <span className="text-gradient">soluções digitais</span> que transformam
            operações.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-base"
          >
            Criamos sistemas, aplicativos e plataformas para governos, empresas e projetos de
            mobilidade urbana. Também cuidamos da presença digital de marcas que precisam crescer.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.38 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projetos"
              className="group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:scale-[1.03]"
              style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-glow)" }}
            >
              Conheça nossos projetos
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border glass px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground/[0.07]"
            >
              Falar com especialista
            </a>
          </motion.div>
        </div>

        <div className="[perspective:1400px]">
          <DashboardComposition />
        </div>
      </div>
    </section>
  );
}
