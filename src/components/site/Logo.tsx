export function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src="/logo.webp"
      alt="Nobili"
      className={`logo-mark h-8 w-auto ${className}`}
    />
  );
}
