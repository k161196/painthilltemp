"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { XMarkIcon } from '@heroicons/react/24/outline'
import Link from "next/link";


interface DrawerProps {
    children: ReactNode;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const Drawer = ({ children, isOpen, setIsOpen }: DrawerProps) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted || !isOpen) {
        return null;
    }

    return createPortal(
        <main className="fixed inset-0 z-[120] overflow-hidden">
            <button
                type="button"
                aria-label="Close menu"
                className="absolute inset-0 bg-slate-950/35 backdrop-blur-[1px]"
                onClick={() => setIsOpen(false)}
            />
            <section
                className="absolute left-0 top-0 z-10 h-full w-[340px] max-w-[88vw] border-r border-black/10 bg-white/95 shadow-2xl"
            >

                <article className="relative flex h-full w-[340px] max-w-[88vw] flex-col pb-8">
                    <header className="flex items-center justify-between border-b border-black/10 px-5 py-5">
                        <div className="flex flex-shrink-0 items-center">
                            <Link
                                href="/"
                                onClick={() => setIsOpen(false)}
                                className="inline-flex items-center gap-2 text-2xl font-semibold text-slate-950"
                            >
                                <span className="h-3 w-3 rounded-full bg-[var(--ph-accent)]" aria-hidden="true" />
                                <span>Paint Hill</span>
                            </Link>
                        </div>

                        <button
                            type="button"
                            aria-label="Close menu"
                            onClick={() => setIsOpen(false)}
                            className="inline-flex min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center rounded-xl border border-black/10 text-slate-800 transition-colors hover:bg-slate-50 active:scale-95"
                        >
                            <XMarkIcon className="h-6 w-6" />
                        </button>
                    </header>
                    <div className="px-5 py-6">{children}</div>
                </article>
            </section>
        </main>,
        document.body
    );
}

export default Drawer;
