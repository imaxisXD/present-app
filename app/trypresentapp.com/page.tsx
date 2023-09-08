'use client'

import { Button } from "@/components/ui/button"
import Stars from "@/components/ui/stars"
import Image from "next/image"

export default function Home() {
    return (
        <div className="bg-star-pattern">
            <Stars />

            <div className="flex flex-col justify-center items-center mx-auto text-center">

                <h2 className="text-white bg-[#FD86BF] p-1 w-40 h-9 flex justify-center items-center rounded-t-md rounded-r-md -rotate-12 ">Powered by AI</h2>
                <h1 className="text-white text-6xl">Your all-in-one <br /> influencer marketing tool</h1>
                <h1 className="text-white text-6xl w-fit"></h1>
                <h3>Present simplify and automate your influencer marketing campaigns, allowing you to focus on growth.</h3>
                <Button>Early Access</Button>
            </div >
            <section className="flex justify-center items-center mx-24">
                <div className="relative group w-fit">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-lime-bg rounded-lg blur-2xl transition duration-1000 animate-tilt">
                    </div>
                    <Image src={'/dashboard.png'} alt={'Image of the Present App'}
                        width={5480}
                        height={3104}
                        priority={true}
                        className="relative"
                    />
                </div>
            </section>
        </div>
    )
}
