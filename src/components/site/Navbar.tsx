import { useEffect, useState } from "react";
import { WHATSAPP_URL } from "@/lib/site";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Projetos", href: "#projetos" },
  { label: "Presença Digital", href: "#presenca-digital" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`mx-auto mt-3 flex w-[min(1200px,94vw)] items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 ${
          scrolled ? "glass shadow-[0_18px_60px_-30px_rgba(0,0,0,0.9)]" : "border border-transparent"
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5" aria-label="Nobili — início">
          <Logo />
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <ThemeToggle className="ml-1" />
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle className="lg:hidden" />
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:scale-[1.03] sm:inline-flex"
            style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-glow)" }}
          >
            Solicitar orçamento
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="grid size-10 place-items-center rounded-xl border border-border text-foreground lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-auto mt-2 w-[min(1200px,94vw)] rounded-2xl glass p-3 lg:hidden"
            aria-label="Menu móvel"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm text-muted-foreground hover:bg-foreground/5 hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-xl px-4 py-3 text-center text-sm font-medium text-primary-foreground"
              style={{ background: "var(--gradient-brand)" }}
            >
              Solicitar orçamento
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
