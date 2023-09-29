import Balancer from 'react-wrap-balancer'
import FeatureButton from '@/components/ui/featureButton';
import FeatureWrapper from '@/components/featurewrapper';
import Hero from '@/components/hero';
import { CTASECTION } from '@/components/ctasection';



export default function Home() {


    return (
        <main className="relative" style={{ scrollBehavior: 'smooth' }}>
            <Hero />
            <div className="relative flex flex-col justify-center items-center text-center mx-auto bg-section-gradient" >
                <span className='w-11/12 h-[1px] bg-slate-400 opacity-25 rounded-3xl mb-16' />
                <FeatureButton />
                <h1 className="text-6xl font-fixel font-extrabold mt-7 mb-7 text-gradient antialiased leading-tight animate-text-bg">
                    <Balancer>You don`t need multiple tool
                    </Balancer>
                </h1>
                <h3 className='text-zinc-400 font-inter mb-7 text-xl w-fit'>
                    <Balancer>
                        To manage your influencer marketing, present has everything in it.<br /> So no need for alt-tabbing!
                    </Balancer>
                </h3>
            </div>

            <FeatureWrapper />

            <section className='relative h-96 bg-gradient-to-b from-black via-pink-700 to-purple-800 bg-black mt-7 group'>
                <div className='h-full bg-grid bg-black group-hover:bg-opacity-[0.90] transition duration-1000'>
                    <CTASECTION />
                    <div className='absolute m-auto h-full top-0 left-0 right-0 flex flex-col items-center justify-center gap-3'>
                        <h2 className='font-fixel text-3xl font-semibold text-center'>Join the waitlist for early access.</h2>
                        <div className='flex items-center gap-2'>
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 "></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#04B701] border border-[#09F404]"></span>
                            </span>
                            <p className='text-xl font-fixel text-[#949494] font-medium text-center'>Currently in development</p>
                        </div>
                        <form action="" className='flex flex-wrap border border-[#9A9A9A] h-14 rounded-full w-full md:w-5/12 justify-between item-center mx-5 md:mx-0'>
                            <input type="email" name="email-field" id="email-field" className='w-2/3 rounded-l-full bg-black backdrop-blur-sm bg-opacity-20 pl-6 md:text-xl text-base focus:outline-none'
                                placeholder='Enter your email'
                            />
                            <button className='bg-white text-black rounded-full font-semibold text-2xl glow-shadow md:px-10 w-1/3'>Join</button>
                        </form>

                    </div>
                </div>

            </section>

        </main >
    )
}
