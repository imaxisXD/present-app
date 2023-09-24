
function FeatureButton() {
    return (

        <div className="-z-1 flex items-center gap-3 w-fit pt-3 pb-3 pl-7 pr-7 bg-gradient-to-b to-gray-900 from-black rounded-3xl border border-pink-500 group">
            <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-300 "></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-400 group-hover:w-56"></span>
            </span>
            <span className="text-sm font-medium">How it works!</span>
        </div>


    )
}

export default FeatureButton


