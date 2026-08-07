import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { WHATSAPP_URL } from "@/lib/site";

export function FinalCTA() {
  return (
    <section id="contato" className="px-[4vw] py-28 lg:py-36">
      <Reveal>
        <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-[32px] border border-border px-6 py-20 text-center sm:px-16">
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden
            style={{
              background:
                "radial-gradient(70% 120% at 50% 0%, color-mix(in oklab, var(--violet) 38%, transparent), transparent 65%), radial-gradient(60% 100% at 80% 100%, color-mix(in oklab, var(--azure) 26%, transparent), transparent 70%), var(--surface)",
            }}
          />
          <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" aria-hidden />

          <div className="relative">
            <h2 className="mx-auto max-w-[18ch] text-balance font-display text-[clamp(2.1rem,5vw,3.6rem)] font-semibold leading-[1.02]">
              Vamos construir sua próxima solução?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
              Se você procura tecnologia para transformar sua operação, estamos prontos para
              desenvolver a solução ideal.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-transform duration-300 hover:scale-[1.03]"
            >
              Falar com um especialista
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
