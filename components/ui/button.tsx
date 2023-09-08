import { MovingBorder } from "@/lib/movingBtn";

export function Button({
    borderRadius = "1.75rem",
    children,
    ...otherProps
}: any) {
    return (
        <button
            className="bg-transparent relative text-xl  h-11 w-36 p-[1px] overflow-hidden "
            style={{
                borderRadius: borderRadius,
            }}
            {...otherProps}
        >
            <div
                className="absolute inset-0"
                style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
            >
                <MovingBorder duration={3500} rx="30%" ry="30%">
                    <div
                        style={{
                            background:
                                "radial-gradient(#C0F560 40%, transparent 60%)",
                        }}
                        className="h-20 w-20 opacity-[0.8] "
                    />
                </MovingBorder>
            </div>

            <div
                className="relative bg-green-900/[0.8] border border-green-500 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased"
                style={{
                    borderRadius: `calc(${borderRadius} * 0.96)`,
                }}
            >
                {children}
            </div>
        </button>
    );
}

