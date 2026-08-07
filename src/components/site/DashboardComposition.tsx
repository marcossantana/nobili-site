import { motion } from "motion/react";
import { Activity, Map, Smartphone, TrendingUp, Users } from "lucide-react";

function Bars() {
  const heights = [38, 62, 44, 78, 56, 92, 70, 48, 84, 60];
  return (
    <div className="flex h-24 items-end gap-1.5">
      {heights.map((h, i) => (
        <motion.span
          key={i}
          initial={{ height: 4, opacity: 0 }}
          animate={{ height: `${h}%`, opacity: 1 }}
          transition={{ delay: 0.8 + i * 0.06, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="w-full rounded-t-[3px]"
          style={{
            background:
              i % 3 === 0
                ? "linear-gradient(180deg, var(--azure), transparent)"
                : "linear-gradient(180deg, var(--violet), transparent)",
          }}
        />
      ))}
    </div>
  );
}

function MapPanel() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl bg-[#0b0b0f]">
      <svg viewBox="0 0 320 200" className="absolute inset-0 h-full w-full opacity-70">
        <defs>
          <linearGradient id="route" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--violet)" />
            <stop offset="100%" stopColor="var(--azure)" />
          </linearGradient>
        </defs>
        {Array.from({ length: 9 }).map((_, i) => (
          <line
            key={`h${i}`}
            x1="0"
            y1={i * 24}
            x2="320"
            y2={i * 24}
            stroke="white"
            strokeOpacity="0.05"
          />
        ))}
        {Array.from({ length: 14 }).map((_, i) => (
          <line
            key={`v${i}`}
            x1={i * 24}
            y1="0"
            x2={i * 24}
            y2="200"
            stroke="white"
            strokeOpacity="0.05"
          />
        ))}
        <motion.path
          d="M14 168 C 70 150, 78 96, 132 88 S 210 96, 240 52 L 300 36"
          fill="none"
          stroke="url(#route)"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.2, delay: 0.6, ease: "easeInOut" }}
        />
        <motion.path
          d="M28 30 C 90 44, 96 118, 168 132 S 250 150, 306 138"
          fill="none"
          stroke="white"
          strokeOpacity="0.18"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.4, delay: 0.9, ease: "easeInOut" }}
        />
        {[
          [132, 88],
          [240, 52],
          [168, 132],
        ].map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="10" fill="var(--violet)" fillOpacity="0.15" />
            <circle cx={cx} cy={cy} r="3.5" fill="white" />
          </g>
        ))}
      </svg>
      <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-md glass px-2 py-1 text-[10px] text-muted-foreground">
        <Map className="size-3" /> Frota em operação
      </div>
      <div className="absolute bottom-3 right-3 rounded-md glass px-2 py-1 font-mono text-[10px] text-foreground">
        142 veículos · 98,4% ativos
      </div>
    </div>
  );
}

export function DashboardComposition() {
  return (
    <div className="relative mx-auto w-full max-w-[620px]">
      <div
        className="pointer-events-none absolute -inset-16 -z-10 rounded-full blur-3xl"
        style={{ background: "var(--gradient-soft)" }}
        aria-hidden
      />

      <motion.div
        initial={{ opacity: 0, y: 40, rotateX: 8 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="glow-ring rounded-2xl glass p-4"
      >
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              Painel operacional
            </p>
            <p className="font-display text-lg font-semibold">Mobilidade Urbana</p>
          </div>
          <span className="rounded-full border border-border px-2.5 py-1 font-mono text-[10px] text-muted-foreground">
            tempo real
          </span>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {[
            { icon: Users, label: "Usuários", value: "38.412" },
            { icon: Activity, label: "Validações", value: "12.907" },
            { icon: TrendingUp, label: "Eficiência", value: "94,2%" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 + i * 0.1, duration: 0.6 }}
              className="rounded-xl border border-border bg-foreground/[0.02] p-3"
            >
              <s.icon className="size-3.5 text-muted-foreground" />
              <p className="mt-2 font-display text-base font-semibold">{s.value}</p>
              <p className="text-[10px] text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-3 grid grid-cols-5 gap-3">
          <div className="col-span-3 h-[190px] rounded-xl border border-border p-3">
            <MapPanel />
          </div>
          <div className="col-span-2 rounded-xl border border-border bg-foreground/[0.02] p-3">
            <p className="text-[10px] text-muted-foreground">Registros processados</p>
            <p className="mb-3 font-display text-lg font-semibold">1,4M</p>
            <Bars />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="animate-float absolute -bottom-14 -left-6 w-[176px] rounded-[22px] glass p-3 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)] sm:-left-14"
      >
        <div className="flex items-center gap-2">
          <Smartphone className="size-3.5 text-muted-foreground" />
          <span className="text-[10px] text-muted-foreground">App do estudante</span>
        </div>
        <div className="mt-3 rounded-xl bg-[#0b0b0f] p-3">
          <div className="h-1.5 w-10 rounded-full bg-foreground/15" />
          <p className="mt-3 font-display text-sm font-semibold">Recadastro</p>
          <p className="text-[10px] text-muted-foreground">Etapa 3 de 4</p>
          <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-foreground/10">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "76%" }}
              transition={{ delay: 1.3, duration: 1.1, ease: "easeOut" }}
              className="h-full rounded-full"
              style={{ background: "var(--gradient-brand)" }}
            />
          </div>
          <div className="mt-3 flex gap-1.5">
            {["Docs", "Foto", "Envio"].map((t) => (
              <span
                key={t}
                className="rounded-md border border-border px-1.5 py-0.5 text-[9px] text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -24, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -right-4 -top-12 hidden w-[196px] rounded-2xl glass p-3 sm:block"
      >
        <p className="text-[10px] text-muted-foreground">Analytics</p>
        <p className="font-display text-sm font-semibold">Uso por linha</p>
        <svg viewBox="0 0 160 54" className="mt-2 w-full">
          <motion.path
            d="M0 44 L26 34 L52 38 L78 20 L104 26 L130 10 L160 16"
            fill="none"
            stroke="var(--azure)"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.6, delay: 1.1 }}
          />
        </svg>
        <div className="mt-1 flex justify-between font-mono text-[9px] text-muted-foreground">
          <span>seg</span>
          <span>dom</span>
        </div>
      </motion.div>
    </div>
  );
}
