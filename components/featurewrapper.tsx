import FeatureCard from "./ui/feature-card"
function FeatureWrapper() {
    return (
        <div className="flex flex-col items-center w-full p-4 mb-5">
            <FeatureCard title="Step 1: Search" img="/search-card1.webp" zIndex={50} />
            <div className="sticky bottom-[9vh] z-40 w-11/12 h-[600px] bg-green-300 rounded-lg border border-[#555] m-2 ">
                <h1>Step 1: Search</h1>
                <div className="text-center">
                    <p>Search influencer from any social media platform</p>
                </div>
            </div>
            <div className="sticky bottom-[8vh] z-30 w-11/12 h-[600px] bg-purple-300 rounded-lg border border-[#555] m-2 ">
                <h1>Step 1: Search</h1>
                <div className="text-center">
                    <p>Search influencer from any social media platform</p>
                </div>
            </div>
        </div>
    )
}

export default FeatureWrapper