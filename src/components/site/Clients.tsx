import { Reveal, SectionLabel } from "./Reveal";

const clients = [
  "Grupo São João",
  "ATUV",
  "Via Feira",
  "Prefeitura de Nova Fátima",
  "Prefeitura de Capela do Alto Alegre",
  "ANTP",
  "TTI",
  "Salles Vox",
  "WVO Engenharia",
  "Azzaf Turismo",
  "CapelaNet",
  "SertãoNet",
  "MegasNet",
  "Rede Megas",
  "Core3 Tecnologia",
  "Bodyfit Academias",
  "Cuida+",
  "Kamila Figueiredo",
];

export function Clients() {
  return (
    <section className="border-y border-border py-20">
      <div className="mx-auto w-[min(1200px,92vw)]">
        <Reveal>
          <SectionLabel>Clientes</SectionLabel>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-foreground/[0.06] sm:grid-cols-4 lg:grid-cols-6">
          {clients.map((c, i) => (
            <Reveal key={c} delay={0.04 * i} y={14} blur={false}>
              <div className="flex h-full min-h-[92px] items-center justify-center bg-background px-4 text-center">
                <span className="font-display text-[13px] font-medium uppercase tracking-[0.1em] text-muted-foreground/70 transition-colors duration-500 hover:text-foreground">
                  {c}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
