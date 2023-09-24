"use client";
import {
    motion,
    useTransform,
    useMotionValue,
    useAnimationFrame
} from "framer-motion";

interface ParallaxProps {
    children: any;
    baseVelocity: number;
}

function wrap(min: number, max: number, value: number): number {
    const range = max - min;
    const wrappedValue = ((value - min) % range + range) % range + min;
    return wrappedValue;
}

function Scroller({ children, baseVelocity = 10 }: ParallaxProps) {
    const baseX = useMotionValue(0);
    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
    useAnimationFrame((t, delta) => {
        let moveBy = baseVelocity * (delta / 1000);
        baseX.set(baseX.get() + moveBy);
    });
    return (
        <div className="overflow-hidden whitespace-nowrap flex flex-nowrap w-[342px] h-[65px] pt-4 pb-4 border border-[#454545] rounded-[40px]">
            <motion.div style={{ x }} className="flex whitespace-nowrap w-[342px] flex-nowrap gap-12 items-center ">
                <span className="flex mr-8">{children} </span>
                <span className="flex mr-8">{children} </span>
                <span className="flex mr-8">{children} </span>
                <span className="flex mr-8">{children} </span>
            </motion.div>
        </div>
    )
}

export default Scroller