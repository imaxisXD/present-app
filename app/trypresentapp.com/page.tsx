import Balancer from 'react-wrap-balancer'
import FeatureButton from '@/components/ui/featureButton';
import FeatureWrapper from '@/components/featurewrapper';
import Hero from '@/components/hero';
import { CTASECTION } from '@/components/ctasection';



export default function Home() {


    return (
        <main className="relative">
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

            <section className='relative h-96 bg-gradient-to-b from-black via-[#EFC0FF] to-purple-800 bg-black mt-7 group'>
                <div className='h-full bg-grid bg-black group-hover:bg-opacity-[0.9] transition duration-1000'>
                    <CTASECTION />
                    <div className='absolute top-0 flex flex-col items-center'>
                        <h2>Join the waitlist for early access.</h2>
                        <p>Currently in development</p>
                        <form action="">
                            <input type="email" name="email-field" id="email-field" />
                            <button>Join</button>
                        </form>
                    </div>
                </div>

            </section>

        </main >
    )
}
