import clsx from "clsx";

export const Meteors = ({ number }: { number?: number }) => {
    const meteors = new Array(number || 20).fill(true);
    return (
        <>
            {meteors.map((idx) => (
                <span
                    key={"meteor" + idx}
                    className={clsx(
                        "animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-blue-700 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
                        "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#bed9ff] before:to-transparent"
                    )}
                    style={{
                        top: 50,
                        left: Math.floor(Math.random() * (400 - -400) + -400) + "px",
                        animationDelay: Math.random() * (0.8 - 0.6) + 20 + "s",
                        animationDuration: Math.floor(Math.random() * (10 - 1) + 20) + "s",
                    }}
                ></span>
            ))}
        </>
    );
};

