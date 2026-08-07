import { Lightbulb, LightbulbOff } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { isLight, toggle } = useTheme();
  const title = isLight ? "Apagar a luz" : "Acender a luz";

  return (
    <button
      type="button"
      onClick={toggle}
      title={title}
      aria-label={title}
      className={`grid size-10 place-items-center rounded-xl border border-border text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground ${className}`}
    >
      {isLight ? <LightbulbOff className="size-4.5" /> : <Lightbulb className="size-4.5" />}
    </button>
  );
}
