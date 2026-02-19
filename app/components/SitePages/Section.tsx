type SectionProps = {
  title: string;
  desc?: string;
  children: React.ReactNode;
};

export default function Section({ title, desc, children }: SectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-950">
          {title}
        </h2>
        {desc ? <p className="text-base text-slate-700 max-w-3xl">{desc}</p> : null}
      </div>
      <div className="mt-8">{children}</div>
    </section>
  );
}

