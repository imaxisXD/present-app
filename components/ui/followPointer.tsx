'use client';
import { motion } from "framer-motion";

export const FollowPointer = ({
    x,
    y,
    title,
}: {
    x: any;
    y: any;
    title?: string | React.ReactNode;
}) => {
    return (
        <motion.div
            className="h-4 w-4 rounded-full absolute z-50"
            style={{
                top: y,
                left: x,
                pointerEvents: "none",
            }}
            initial={{
                scale: 1,
                opacity: 1,
            }}
            animate={{
                scale: 1,
                opacity: 1,
            }}
            exit={{
                scale: 0,
                opacity: 0,
            }}
        >

            <svg
                className="h-5 w-5 "
                width="1em"
                height="1em"
                viewBox="0 0 16 18"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M15.0695 9.03414L0.663119 1.11451L3.74331 17.2631L7.34918 10.3171L15.0695 9.03414Z" fill="#a594fd" stroke="#a594fd" stroke-linejoin="round" >
                </path>
            </svg>

        </motion.div>
    );
};
