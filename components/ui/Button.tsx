import Link from "next/link";

import { cn } from "@/lib/utils";

type Variant = "solid" | "outline" | "ghost";

const base =
  "inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 font-sans text-label-lg font-medium uppercase tracking-[0.14em] transition-all duration-(--duration-quick) ease-editorial disabled:cursor-not-allowed disabled:opacity-45";

const variants: Record<Variant, string> = {
  solid:
    "bg-ink text-ivory hover:bg-burgundy shadow-[var(--shadow-lift)] hover:shadow-[var(--shadow-float)]",
  outline:
    "border border-ink/25 text-ink hover:border-ink/60 hover:bg-ink/[0.03]",
  ghost: "text-ink hover:text-burgundy",
};

type ButtonProps = {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "solid",
  className,
}: ButtonProps & { href: string }) {
  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  );
}

export function Button({
  children,
  variant = "solid",
  className,
  ...props
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
