import { useEffect, useRef, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {

          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Comp = Tag as "div";
  return (
    <Comp
      ref={ref}
      className={cn("reveal", shown && "reveal-in", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Comp>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  id,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  id?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 id={id} className="mt-4 text-3xl font-semibold sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{subtitle}</p>
      ) : null}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-semibold tracking-[0.14em] text-primary uppercase">
      {children}
    </span>
  );
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-semibold transition-all duration-200 min-h-11 px-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-60";

export const buttonStyles = {
  primary: cn(
    base,
    "bg-primary text-primary-foreground shadow-card hover:bg-primary-dark hover:shadow-lift",
  ),
  outline: cn(
    base,
    "border border-border bg-card text-heading hover:border-primary hover:bg-accent",
  ),
  ghost: cn(base, "text-primary hover:bg-accent"),
};

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-card p-6 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lift",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function IconBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-md bg-accent text-primary">
      {children}
    </span>
  );
}
