import { MovingBorder } from "@/lib/movingBtn";

export function LinkButton({
  to,
  borderRadius = "1.75rem",
  children,
  ...otherProps
}: any) {
  return (
    <a
      className="relative text-xl h-14 w-48 p-[1px] overflow-hidden cursor-pointer "
      {...otherProps}
      style={{
        borderRadius: borderRadius,
      }}
    >
      <div
        className=" inset-0 "
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={7500} rx="30%" ry="30%">
          <div
            style={{
              background: "radial-gradient(#C0F560 40%, transparent 60%)",
            }}
            className="h-20 w-20 opacity-70 "
          />
        </MovingBorder>
      </div>
      <div
        className="relative hover:bg-green-900 bg-green-900/[0.8] border border-green-500 backdrop-blur-xl text-white font-medium flex items-center justify-center w-full h-full text-base antialiased"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        {children}
      </div>
    </a>
  );
}
