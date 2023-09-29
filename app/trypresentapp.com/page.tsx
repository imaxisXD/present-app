import Hero from '@/components/hero';
import { CTASECTION } from '@/components/ctasection';
import Featsection from '@/components/featsection';



export default function Home() {


    return (
        <main className="relative" style={{ scrollBehavior: 'smooth' }}>
            <Hero />
            <Featsection />
            <section className='relative h-[500px] bg-black group overflow-clip'>
                <div className='absolute m-auto h-full -top-7 left-0 right-0 w-[555px] '>
                    <div className='h-[555px] w-[555px] rounded-full relative '>
                        <div className='h-[555px] w-[555px] radar rounded-full absolute m-auto left-0 right-0' />
                        <div className='h-[542px] w-[542px] rounded-full bg-black absolute m-auto inset-x-0 inset-y-0 circle blur-sm'></div>
                    </div>
                </div>
                <div className='absolute m-auto h-full -top-7 left-0 right-0 w-[555px]'>
                    <div className='h-[555px] w-[555px] rounded-full relative rotate-180 '>
                        <div className='h-[555px] w-[555px] radar rounded-full absolute m-auto left-0 right-0' />
                        <div className='h-[542px] w-[542px] rounded-full bg-black absolute m-auto inset-x-0 inset-y-0 circle blur-sm'></div>
                    </div>
                </div>
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
            <div className='h-96 w-full bg-black'></div>
        </main >
    )
}
