"use client";

import {
    motion,
    useTransform,
    useMotionValue,
    useAnimationFrame
} from "framer-motion";
import { useState } from "react";

interface ParallaxProps {
    children: any;
    baseVelocity: number;
    hoverVelocity: number;
}
function wrapx(min: number, max: number, value: number): number {
    const range = max - min;
    const wrappedValue = ((((value - min) % range) + range) % range) + min;
    return wrappedValue;
}

export default function ParallaxText({ children, baseVelocity, hoverVelocity }: ParallaxProps) {
    const [baseVelocitySet, setBaseVelocitySet] = useState(baseVelocity);
    const baseX = useMotionValue(0);
    const x = useTransform(baseX, (v) => `${wrapx(-40, -80, v)}%`);
    useAnimationFrame((t, delta) => {
        let moveBy = baseVelocitySet * (delta / 1000);
        baseX.set(baseX.get() + moveBy);
    });
    console.log(baseVelocity);

    return (
        <div className="parallax hover:bg-black/20" onMouseEnter={() => setBaseVelocitySet(hoverVelocity)} onMouseLeave={() => setBaseVelocitySet(baseVelocity)}>
            <motion.div className="scroller" style={{ x }}>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
            </motion.div>
        </div>
    );
}


