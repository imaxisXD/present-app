import Image from "next/image"
import FeatureCard from "./ui/feature-card"
function FeatureWrapper() {

    return (
        <div
            className="flex flex-col items-center w-full p-4 " >
            <FeatureCard title="Step 1: Search" img="/search-card1.webp" zIndex={50} />
            <div
                className="sticky overflow-clip bottom-[4vh] z-40 w-11/12 h-[600px] bg-black rounded-lg border border-[#555] m-5 bg-card-gradient-blue group">
                <div className="absolute bg-grid top-0 w-full">
                    <h1 className="font-fixel text-4xl font-semibold p-5 ml-4 mb-3 mt-3 heading-gradient text-left">Step 2 : Choose Your Influencer</h1>
                    <div className="-z-1 border items-center absolute bottom-[10rem] right-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur-3xl transition duration-1000 w-1/2 h-1/2 animate-bg bg-300% opacity-50 group-hover:opacity-100" />
                    <div className="z-10 flex flex-row w-full h-full gap-10 flex-wrap md:flex-nowrap">
                        <div className="flex flex-col px-1 w-[80%] mt-6 ml-8 z-5 h-fit">
                            <h2 className="font-medium font-fixel md:text-xl mt-4 pt-12 text-base md:leading-8">
                                Selecting the perfect influencer is a breeze.<br />
                                Utilize our powerful filtering options to pinpoint the ideal influencer that aligns perfectly with your needs.
                            </h2>
                        </div>
                        <div className="relative w-full h-[549px]">
                            <Image src='/feat-card.webp'
                                alt="feature 2 : image of the influencers search result"
                                fill={true}
                                style={{
                                    objectFit: 'contain',
                                    top: '-33px',
                                    left: '1px'
                                }}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="sticky overflow-clip bottom-[5vh] z-30 w-11/12 h-[600px] bg-black rounded-lg border border-[#555] m-5 bg-card-gradient-purple group">
                <div className="absolute bg-grid top-0 w-full">
                    <h1 className="font-fixel text-4xl font-semibold p-5 ml-4 mb-3 mt-3 heading-gradient text-left">Step 3: Automate the Process</h1>
                    <div className="z-1 border items-center absolute bottom-[10rem] right-0 bg-gradient-to-r from-[#A34BB9] to-pink-600 rounded-lg blur-3xl transition duration-1000 w-1/2 h-1/2 animate-bg bg-300% opacity-50 group-hover:opacity-100" />
                    <div className="z-10 flex flex-row w-full h-full gap-10 flex-wrap md:flex-nowrap">
                        <div className="flex flex-col px-1 w-[80%] mt-6 ml-8 z-5 h-fit">
                            <h2 className="font-medium font-fixel md:text-xl mt-4 pt-12 text-base md:leading-8 text-[#B3B3B3]">
                                Once you`ve set your budget, relax as we take care of everything else. From reaching out to influencers and negotiating deals to finalizing campaigns and more, we`ve got it all automated for you.<br />
                            </h2>
                            <span className="font-medium font-fixel text-lg md:text-2xl text-white pt-2">Sit back and watch the <span className="magic-text bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-400 inline-block bg-clip-text text-transparent">magic !</span></span>
                        </div>
                        <div className="relative w-full h-[549px]">
                            <Image src='/dash-card.webp'
                                alt="feature 3 : image of the dashboard to monitior the campaign by yourself"
                                fill={true}
                                style={{
                                    objectFit: 'contain',
                                    top: '-33px',
                                    left: '1px'
                                }}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default FeatureWrapper