function CustomCursorDiv() {
    const cursor = `<svg
    className="h-7 w-7"
    width="1.2em"
    height="1.2em"
    viewBox="0 0 16 18"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M15.0695 9.03414L0.663119 1.11451L3.74331 17.2631L7.34918 10.3171L15.0695 9.03414Z" fill="#a594fd" stroke="#a594fd" strokeLinejoin="round" >
    </path>
</svg>`
    return (
        <div className="z-10 w-11/12 flex flex-col items-center justify-center h-52 gap-9 rounded-md border bg-black border-[#383838]"
            style={{
                cursor: `url("data:image/svg+xml;utf8,${encodeURIComponent(cursor)}"), auto`
            }}>
            <p className="w-11/12 text-center font-fixel font-medium md:text-xl mt-4 text-base">
                Allow us to
                <span className="green-text font-inter mx-1 relative">
                    crawl
                </span>
                your website and recommend influencers for you
            </p>
        </div>
    )
}

export default CustomCursorDiv