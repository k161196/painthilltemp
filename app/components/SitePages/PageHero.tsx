import BackToHome from "./BackToHome";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  lead: string;
};

export default function PageHero({ eyebrow, title, lead }: PageHeroProps) {
  return (
    <section className="ph-hero-bg border-b border-black/5">
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-12 lg:px-8 lg:pt-14">
        <BackToHome />
        <p className="mt-8 text-xs tracking-[0.18em] uppercase text-slate-600">
          {eyebrow}
        </p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-slate-950">
          {title}
        </h1>
        <p className="mt-4 max-w-3xl text-base sm:text-lg text-slate-700">
          {lead}
        </p>
      </div>
    </section>
  );
}

