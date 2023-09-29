import clsx from "clsx";

export const Meteors = ({ number }: { number?: number }) => {
    const meteors = new Array(number || 20).fill(true);
    return (
        <>
            {meteors.map((_, idx) => (
                <span
                    key={"meteor" + idx}
                    className={clsx(
                        "z-1  animate-meteor-effect absolute top-5 -left-2 h-0.5 w-0.5 rounded-[9999px] bg-blue-700 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
                        "before:content-[''] before:absolute before:top-0 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#bed9ff] before:to-transparent"
                    )}
                    style={{
                        left: Math.floor(Math.random() * (400 - -400) + -400) + "px",
                        animationDuration: Math.floor(Math.random() * (40 - 30 + 1) + 40) + "s",
                    }}
                ></span>
            ))}
        </>
    );
};

