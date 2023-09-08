'use client'
import Balancer from 'react-wrap-balancer'
import { Button } from "@/components/ui/button"
import Stars from "@/components/ui/stars"
import Image from "next/image"

export default function Home() {
    return (
        <div className="bg-star-pattern overflow-hidden">
            <Stars />
            <div className="flex flex-col justify-center items-center mx-auto text-center mt-24 w-11/12">
                <h2 className="text-white antialiased bg-[#FD86BF] p-1 w-40 h-9 flex justify-center items-center rounded-t-md rounded-r-md -rotate-12 font-inter font-medium text-lg">Powered by AI</h2>
                <h1 className="text-7xl font-fixel font-extrabold mb-7 text-gradient antialiased leading-tight">
                    <Balancer>Your all-in-one <br /> influencer marketing tool
                    </Balancer>
                </h1>
                <h3 className='text-white/70 font-fixel font-medium mb-7 text-xl w-fit'>
                    <Balancer>
                        Present simplify and automate your influencer marketing.<br /> Allowing you to focus on growth.
                    </Balancer>
                </h3>
                <Button>Early Access</Button>
            </div >

            <section className="flex justify-center items-center mx-24 mt-40 [perspective:2000px] ">
                <div className="relative group w-fit animate-image-rotate h-5/6 ">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-lime-bg to-purple-500 rounded-lg blur-3xl transition duration-1000 animate-tilt opacity-30 group-hover:opacity-70">
                    </div>
                    <Image src={'/dashboard.png'} alt={'Image of the Present App'}
                        width={1440}
                        height={1020}
                        priority={true}
                        className="relative border-2 border-white/5 backdrop-opacity-10 rounded-xl"
                    />
                </div>
            </section>
        </div >
    )
}
