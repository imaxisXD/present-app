'use client'
import FeatureCard from "./ui/feature-card"
import { useInView } from "react-intersection-observer";
import { motion } from 'framer-motion'
function FeatureWrapper() {
    const { ref, inView } = useInView({ threshold: 1 });
    return (
        <div className="flex flex-col items-center w-full p-4">

            <FeatureCard title="Step 1: Search" img="/search-card1.webp" zIndex={50} />

            <motion.div ref={ref} className="sticky bottom-[8vh] z-30 w-11/12 h-[600px] bg-red-300 rounded-lg border border-[#555] m-2 "
                style={{
                    opacity: inView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}>
                <h1>Step 1: Search</h1>
                <div className="text-center">
                    <p>Search influencer from any social media platform</p>
                </div>
            </motion.div>

            <div className="sticky bottom-[10vh] z-20 w-11/12 h-[600px] bg-blue-300 rounded-lg border border-[#555] m-2 ">
                <h1>Step 1: Search</h1>
                <div className="text-center">
                    <p>Search influencer from any social media platform</p>
                </div>
            </div>



        </div>
    )
}

export default FeatureWrapper