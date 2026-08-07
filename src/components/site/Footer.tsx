import { Logo } from "./Logo";
import { Mail, MessageCircle, Linkedin, Instagram } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";

const menu = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Projetos", href: "#projetos" },
  { label: "Presença Digital", href: "#presenca-digital" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

const social = [
  { label: "WhatsApp", href: WHATSAPP_URL, icon: MessageCircle },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
  { label: "contato@nobili.com.br", href: "mailto:contato@nobili.com.br", icon: Mail },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <div className="mx-auto grid w-[min(1200px,92vw)] gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Desenvolvimento de soluções digitais para mobilidade urbana, gestão pública e presença
            digital de marcas.
          </p>
        </div>

        <nav aria-label="Rodapé">
          <h3 className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Menu</h3>
          <ul className="mt-4 space-y-2.5">
            {menu.map((m) => (
              <li key={m.href}>
                <a href={m.href} className="text-sm text-muted-foreground hover:text-foreground">
                  {m.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Contato</h3>
          <ul className="mt-4 space-y-2.5">
            {social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                >
                  <s.icon className="size-4" />
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 flex w-[min(1200px,92vw)] flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Nobili. Todos os direitos reservados.</span>
        <span>Tecnologia • Confiança • Sofisticação • Inovação</span>
      </div>
    </footer>
  );
}
