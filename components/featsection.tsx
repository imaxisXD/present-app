import Balancer from 'react-wrap-balancer'
import FeatureButton from '@/components/ui/featureButton';
import FeatureWrapper from '@/components/featurewrapper';

function Featsection() {
    return (
        <section id="feat-section" className='pb-28 bg-gradient-to-b from-background to-black'>
            <div className="relative flex flex-col pb-7 mb-5 gap-1 justify-center items-center text-center mx-auto bg-section-gradient" >
                <span className='w-11/12 h-[1px] bg-slate-400 opacity-25 rounded-3xl mb-16' />
                <FeatureButton />
                <div className='flex flex-col justify-center items-center text-center'>
                    <h1 className="text-6xl font-fixel font-extrabold mt-7 mb-5 text-gradient antialiased leading-tight animate-text-bg">
                        <Balancer>You don`t need multiple tool
                        </Balancer>
                    </h1>
                    <h3 className='text-zinc-400 font-inter mb-7 text-xl w-fit'>
                        <Balancer>
                            To manage your influencer marketing, present has everything in it.<br /> So no need for alt-tabbing!
                        </Balancer>
                    </h3>
                </div>
            </div>
            <FeatureWrapper />
        </section>
    )
}

export default Featsection