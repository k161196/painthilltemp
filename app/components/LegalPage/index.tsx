import type { ReactNode } from "react";
import PageHero from "../SitePages/PageHero";

export type LegalTocItem = {
  id: string;
  label: string;
};

type LegalPageProps = {
  title: string;
  lead: string;
  lastUpdated: string;
  toc: LegalTocItem[];
  children: ReactNode;
};

export function LegalSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section aria-labelledby={id} className="scroll-mt-28">
      <h2 id={id} className="text-xl sm:text-2xl font-semibold text-slate-950">
        {title}
      </h2>
      <div className="mt-4 text-base leading-relaxed text-slate-700">
        {children}
      </div>
    </section>
  );
}

export default function LegalPage({ title, lead, lastUpdated, toc, children }: LegalPageProps) {
  return (
    <div className="min-h-screen">
      <PageHero eyebrow="Legal" title={title} lead={lead} />

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <div className="ph-glass rounded-3xl p-6 lg:sticky lg:top-24">
              <p className="text-xs tracking-[0.18em] uppercase text-slate-600">
                On this page
              </p>
              <nav aria-label={`${title} table of contents`} className="mt-4">
                <ul className="space-y-2">
                  {toc.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="text-sm font-semibold text-slate-800 hover:text-slate-950 transition-colors"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-6 border-t border-black/10 pt-4">
                <p className="text-sm text-slate-600">
                  Last updated:{" "}
                  <span className="font-semibold text-slate-800">
                    {lastUpdated}
                  </span>
                </p>
              </div>
            </div>
          </aside>

          <article className="lg:col-span-8">
            <div className="ph-glass rounded-3xl p-7 sm:p-10">
              <div className="space-y-10">{children}</div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

