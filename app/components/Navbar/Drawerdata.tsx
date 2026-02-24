import React from "react";
import Link from "next/link";

interface NavigationItem {
  name: string;
  href: string;
}

const navigation: NavigationItem[] = [
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface DataProps {
  onQuoteClick?: () => void;
  onNavigate?: () => void;
}

const Data: React.FC<DataProps> = ({ onQuoteClick, onNavigate }) => {
  return (
    <div className="w-full max-w-sm">
      <div className="flex-1 space-y-4">
        <div className="sm:block">
          <div className="space-y-2">
            <p className="px-1 text-xs uppercase tracking-[0.18em] text-slate-600">Menu</p>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={onNavigate}
                className={classNames(
                  "block min-h-[44px] rounded-2xl border border-black/10 bg-white/80 px-4 py-3 text-base font-semibold text-slate-900 transition-colors hover:bg-white"
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-6" />
            <button
              onClick={onQuoteClick}
              className="w-full cursor-pointer rounded-full bg-[var(--ph-accent)] px-5 py-3.5 text-base font-semibold text-white transition-opacity duration-200 hover:opacity-95"
            >
              Get a free quote
            </button>
            <Link
              href="/contact"
              onClick={onNavigate}
              className="mt-3 block w-full rounded-full border border-black/15 bg-white px-4 py-3.5 text-center text-base font-semibold text-slate-900 transition-colors hover:bg-slate-50"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
