import Image from 'next/image';
import Icon from '@/components/ui/icon';
import Link from 'next/link';
function Footer() {
    return (
        <footer>
            <div className='relative w-full'>
                <Image
                    width={1200}
                    height={953}
                    role="presentation"
                    alt="gradient background"
                    className="absolute inset-0 w-screen h-screen object-cover"
                    src='/bluebg.webp'
                />
                <div className='flex flex-col absolute top-44 w-full gap-14 '>
                    {/* We are developing thing */}
                    <div className='flex items-center gap-2 bg-black border border-black/20 w-fit px-5 py-1 rounded-3xl ml-10'>
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 "></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#04B701] border border-[#09F404]"></span>
                        </span>
                        <p className='text-lg font-inter font-light text-[#949494] text-center'>Currently in development</p>
                    </div>
                    {/* bottom hero section */}
                    <div className='flex flex-col m-auto items-center gap-3'>
                        <Icon />
                        <h1 className='text-center font-inter font-extrabold text-5xl'>Present</h1>
                        <p className='text-center font-inter text-2xl font-light text-[#A799C9] '>
                            Your all in one influencer marketing tool.<br />
                            That automates the influencer marketing for you
                        </p>
                        <a href="#cta-section"
                            className='shadow-2xl border border-[#231f31] font-inter font-medium text-xl px-12 py-3 rounded-full bg-[#b186fd] text-black hover:text-white transition duration-200 mt-5 hover:-translate-y-1 hover:bg-black/50 '>
                            Join early access
                        </a>
                    </div>
                    <div className='flex flex-wrap gap-3 justify-center sm:justify-between items-center w-full px-3 font-inter text-base mt-12'>
                        <p className='text-[#998BBC]'>All Rights Reserved.©</p>
                        <ul className='flex gap-7 flex-wrap justify-center items-center'>
                            <li>
                                <Link
                                    href="/"
                                >
                                    Twitter / X
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                >
                                    LinkedIn
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                >
                                    Email
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                >
                                    Team
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                >
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                >
                                    Contacts
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer