type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300 light:text-cyan-700">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-white light:text-slate-950 sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-8 text-slate-400 light:text-slate-600">{description}</p> : null}
    </div>
  );
}
