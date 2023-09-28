'use client';
import Balancer from 'react-wrap-balancer'
import Stars from "@/components/ui/stars"
import Image from "next/image"
import { useInView } from "react-intersection-observer";
import clsx from 'clsx';
import Beam from '@/components/ui/beam'
import { LinkButton } from '@/components/ui/linkbutton'
import { Meteors } from '@/components/ui/meteor'


export default function Hero() {
    const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });
    return (
        <div className='relative overflow-hidden'>
            <Meteors number={5} />
            <Stars />
            <section className="z-15 flex flex-col justify-center items-center mx-auto text-center mt-24 w-11/12">
                <h2 className="text-white antialiased bg-[#FD86BF] p-1 w-40 h-9 flex justify-center items-center rounded-t-md rounded-r-md -rotate-12 font-inter font-medium text-lg">Powered by AI</h2>
                <h1 className="text-7xl font-fixel font-extrabold mb-7 text-gradient antialiased leading-tight animate-text-bg">
                    <Balancer>Your all-in-one <br /> influencer marketing tool
                    </Balancer>
                </h1>
                <h3 className='text-zinc-400 font-inter mb-7 text-xl w-fit'>
                    <Balancer>
                        Present simplify and automate your influencer marketing.<br /> Allowing you to focus on growth.
                    </Balancer>
                </h3>
                <LinkButton href='/home'>Early Access</LinkButton>
            </section >
            <section className="flex justify-center items-center mx-24 mt-20 mb-36 [perspective:2000px] ">
                <div className={clsx("relative group w-fit h-5/6 rounded-xl bg-black bg-opacity-50", inView ? "animate-image-rotate" : "[transform:rotateX(25deg)]")} ref={ref}>
                    <div
                        className={clsx(
                            "relative bg-hero-gradient animate-text-bg bg-300% rounded-xl",
                            "before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-hero-glow before:opacity-0 before:[filter:blur(120px)]",
                            inView && "before:animate-image-glow"
                        )}
                    >
                        <Beam direction='top' />
                        <Beam direction='top' />
                        <Beam direction='side' />
                        <Beam direction='side' />
                        <Image src={'/dashboard.webp'} alt={'Image of the Present App'}
                            width={1440}
                            height={1020}
                            priority={true}
                            className={clsx("relative border-2 border-white/5 backdrop-opacity-10 rounded-xl transition-opacity delay-[680ms]", inView ? "opacity-100" : "opacity-0")}
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}