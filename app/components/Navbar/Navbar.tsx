"use client"
import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import GetQuoteModal from '../GetQuoteModal';

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Services', href: '/services', current: false },
    { name: 'Gallery', href: '/gallery', current: false },
    { name: 'Blog', href: '/blog', current: false },
    { name: 'Contact', href: '/contact', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {

    const [isOpen, setIsOpen] = React.useState(false);
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

    return (
        <Disclosure as="nav" className="navbar bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70">
            <>
                <div className="mx-auto max-w-7xl p-3 md:p-4 lg:px-8">
                    <div className="relative flex h-12 sm:h-16 items-center">
                        <div className="flex flex-1 items-center sm:justify-between">

                            {/* LOGO */}

                            <div className="flex flex-shrink-0 items-center">
                                <Link href="/" className='inline-flex items-center gap-2 text-xl sm:text-2xl font-semibold text-slate-950'>
                                    <span className="h-2 w-2 rounded-full bg-[var(--ph-accent)]" aria-hidden="true" />
                                    <span>Paint Hill</span>
                                </Link>
                            </div>

                            {/* LINKS */}

                            <div className="hidden lg:flex items-center gap-8">
                                <div className="flex justify-end space-x-4">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'text-slate-950' : 'text-slate-700 hover:text-slate-950',
                                                'px-2 py-2 rounded-md text-sm font-semibold transition-colors'
                                            )}
                                            aria-current={item.href ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>

                                <div className="hidden xl:flex items-center gap-4 text-sm text-slate-600">
                                    <Link href="tel:+918767520926" className="hover:text-slate-900 transition-colors">
                                        +91 8767520926
                                    </Link>
                                    <span className="text-slate-300" aria-hidden="true">•</span>
                                    <Link href="mailto:support@painthill.in" className="hover:text-slate-900 transition-colors">
                                        support@painthill.in
                                    </Link>
                                </div>
                            </div>
                            <button 
                                onClick={() => setIsQuoteModalOpen(true)}
                                className='hidden lg:inline-flex items-center justify-center text-sm font-semibold bg-[var(--ph-accent)] text-white py-2.5 px-5 rounded-full hover:opacity-95 transition-colors cursor-pointer'
                            >
                                Get a free quote
                            </button> 
                            {/*<Contactusform />*/}
                        </div>


                        {/* DRAWER FOR MOBILE VIEW */}

                        {/* DRAWER ICON */}

                        <div className='block lg:hidden'>
                            <button
                                type="button"
                                onClick={() => setIsOpen(true)}
                                className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white/70 p-2 text-slate-900"
                                aria-label="Open menu"
                            >
                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>

                        {/* DRAWER LINKS DATA */}

                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata onQuoteClick={() => {
                                setIsOpen(false);
                                setIsQuoteModalOpen(true);
                            }} onNavigate={() => setIsOpen(false)} />
                        </Drawer>

                    </div>
                </div>
                
                {/* Get Quote Modal */}
                <GetQuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
            </>
        </Disclosure>
    )
}

export default Navbar;
