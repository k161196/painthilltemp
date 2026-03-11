"use client";

import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import GetQuoteModal from "../GetQuoteModal";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "Services", href: "/services", current: false },
  { name: "Gallery", href: "/gallery", current: false },
  { name: "Blog", href: "/blog", current: false },
  { name: "Contact", href: "/contact", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <Disclosure as="nav" className="navbar">
      <>
        <div className="relative mx-auto max-w-7xl px-4 py-0 md:px-6 lg:px-8">
          <div className="pointer-events-none absolute left-1/2 top-[54px] h-10 w-[92%] -translate-x-1/2 rounded-full bg-[var(--ph-primary)]/10 blur-2xl sm:top-[62px]" />
          <div className="relative flex h-14 items-center rounded-2xl border border-white/80 bg-white/95 px-3 shadow-[0_14px_36px_rgba(2,6,23,0.14)] backdrop-blur-md sm:h-16 sm:px-4">
            <div className="flex flex-1 items-center justify-between gap-4">
              <div className="flex flex-shrink-0 items-center">
                <Link href="/" className="inline-flex items-center gap-2 text-xl font-semibold text-slate-950 sm:text-2xl">
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--ph-accent)]" aria-hidden="true" />
                  <span>Paint Hill</span>
                </Link>
              </div>

              <div className="hidden items-center gap-8 lg:flex">
                <div className="flex justify-end space-x-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? "text-slate-950" : "text-slate-700 hover:text-slate-950",
                        "rounded-full px-3 py-2 text-sm font-semibold transition-colors"
                      )}
                      aria-current={item.href ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                <div className="hidden items-center gap-3 text-sm text-slate-600 xl:flex">
                  <Link href="tel:+918767520926" className="transition-colors hover:text-slate-900">
                    +91 8767520926
                  </Link>
                  <span className="text-slate-300" aria-hidden="true">
                    •
                  </span>
                  <Link href="mailto:support@painthill.in" className="transition-colors hover:text-slate-900">
                    support@painthill.in
                  </Link>
                </div>
              </div>

              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="hidden cursor-pointer items-center justify-center rounded-full bg-[var(--ph-accent)] px-5 py-2.5 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-95 lg:inline-flex"
              >
                Get a free quote
              </button>
            </div>

            <div className="block lg:hidden">
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-black/10 bg-white/80 p-2 text-slate-900 transition-colors hover:bg-white"
                aria-label="Open menu"
              >
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <Drawerdata
                onQuoteClick={() => {
                  setIsOpen(false);
                  setIsQuoteModalOpen(true);
                }}
                onNavigate={() => setIsOpen(false)}
              />
            </Drawer>
          </div>
        </div>

        <GetQuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
      </>
    </Disclosure>
  );
};

export default Navbar;
