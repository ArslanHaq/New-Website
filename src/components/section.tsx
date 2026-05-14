type SectionProps = {
  children: React.ReactNode;
  muted?: boolean;
  className?: string;
  innerClassName?: string;
};

export function Section({
  children,
  muted = false,
  className = "",
  innerClassName = "",
}: SectionProps) {
  if (muted) {
    return (
      <section className={`bg-mist px-5 py-14 sm:px-8 lg:px-10 ${className}`}>
        <div className={`mx-auto max-w-6xl ${innerClassName}`}>{children}</div>
      </section>
    );
  }

  return (
    <section className={`mx-auto max-w-6xl px-5 py-12 sm:px-8 lg:px-10 ${className}`}>
      <div className={innerClassName}>{children}</div>
    </section>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-ember">
      {children}
    </p>
  );
}
