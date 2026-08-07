import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { Reveal } from "./Reveal";

type Stat = { value: number; suffix?: string; prefix?: string; label: string; decimals?: number };

const stats: Stat[] = [
  { prefix: "+", value: 100, label: "Projetos entregues" },
  { prefix: "+", value: 300, suffix: " mil", label: "Usuários atendidos" },
  { value: 3, suffix: "M+", label: "Registros processados" },
  { value: 24, suffix: "/7", label: "Disponibilidade" },
];

function Counter({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(stat.value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, stat.value]);

  return (
    <p ref={ref} className="font-display text-[clamp(2.2rem,5vw,3.4rem)] font-semibold leading-none">
      {stat.prefix}
      {Math.round(n)}
      {stat.suffix}
    </p>
  );
}

export function Stats() {
  return (
    <section className="py-24">
      <div className="mx-auto grid w-[min(1200px,92vw)] gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={0.06 * i}>
            <div className="border-l border-border pl-5">
              <Counter stat={s} />
              <p className="mt-3 text-sm text-muted-foreground">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
