"use client";
import { useEffect, useState } from 'react';
import AnimateHeight from 'react-animate-height';
import type { MouseEventHandler } from 'react';
import Link from 'next/link';
import { useMediaQuery } from 'usehooks-ts';
import LogoType from './ui/logo';
import { Button } from './ui/button';
// import { constants } from '@/utils/constants';


export const Navbar = () => {
    const [height, setHeight] = useState<'auto' | number>(0);
    const isMobile = useMediaQuery('(max-width: 768px)');

    useEffect(() => {
        if (!isMobile) {
            setHeight('auto');
        }
    }, [isMobile]);

    const smoothScrollToTop: MouseEventHandler<HTMLAnchorElement> = (e) => {
        if (location.pathname === '/') {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
            isMobile && setHeight(0);
        }
    };

    const smoothScrollToId =
        (id: string): MouseEventHandler<HTMLAnchorElement> =>
            (e) => {
                if (location.pathname === '/') {
                    e.preventDefault();
                    window.scrollTo({
                        top: (document.getElementById(id)?.offsetTop ?? 0) - 150,
                        behavior: 'smooth',
                    });
                    isMobile && setHeight(0);
                }
            };

    return (
        <nav className="bg-[#0F1414] bg-opacity-60 backdrop-blur-md container sticky inset-x-0 top-2 mt-0 z-30 mx-auto w-screen lg:w-screen md:w-screen max-w-screen-xl py-1 px-2 border-outline-gray/[.33] md:rounded-full md:border">
            <div className="flex flex-wrap items-center justify-between w-full">
                <AnimateHeight id="example-panel" duration={500} height={height}>
                    <Link
                        href="/"
                        onClick={smoothScrollToTop}
                        className="flex items-center ml-3"
                    >
                        <LogoType className='mr-2' />
                        <span className="font-semibold">Present</span>
                    </Link>
                </AnimateHeight>
                <div className="order-3 w-full md:order-1 md:w-auto ">
                    <AnimateHeight id="example-panel" duration={500} height={height}>
                        <ul className="bg-gray-1 dark:bg-graydark-1 flex flex-col text-sm md:flex-row md:items-center ">
                            <li>
                                <Link
                                    href="/"
                                    onClick={smoothScrollToTop}
                                    className="font-fixel font-semibold text-gray-11 dark:text-graydark-11 dark:hover:text-graydark-12 hover:text-gray-12 inline-block pb-3 pt-6 transition-colors md:py-3 md:pl-4 md:pr-6"
                                >
                                    What are we ?
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/#features"
                                    onClick={smoothScrollToId('features')}
                                    className="font-fixel font-semibold text-gray-11 dark:text-graydark-11 dark:hover:text-graydark-12 hover:text-gray-12 inline-block py-3 transition-colors md:px-6 md:py-3"
                                >
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/#mission"
                                    onClick={smoothScrollToId('mission')}
                                    className="font-fixel font-semibold text-gray-11 dark:text-graydark-11 dark:hover:text-graydark-12 hover:text-gray-12 inline-block py-3 transition-colors md:px-6 md:py-3"
                                >
                                    Roadmap
                                </Link>
                            </li>
                        </ul>
                    </AnimateHeight>
                </div>

                <ul className="order-2 flex items-center">
                    <Button>Early Access</Button>
                </ul>
            </div>
        </nav>
    );
};