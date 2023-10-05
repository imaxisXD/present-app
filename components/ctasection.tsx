'use client';
import { ParticleSection } from '@/components/ui/ctasection';
import { useContactForm } from '@/lib/utils';

function CTASECTION() {
    const { status, handleFormSubmit } = useContactForm();

    const FORM_ENDPOINT = 'https://public.herotofu.com/v1/16576110-639b-11ee-94f4-efb6cbd494ee';


    if (status) {
        return (
            <div className="md:w-96 md:max-w-full w-full mx-auto">
                <div className="sm:rounded-md p-6 border border-gray-300">
                    <div className="text-2xl">Thank you!</div>
                    <div className="text-md">{status}</div>
                </div>
            </div>
        );
    }

    return (

        <section id='cta-section' className='relative h-[500px] bg-black group overflow-clip'>
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
                <ParticleSection />
                <div className='absolute m-auto h-full top-0 left-0 right-0 flex flex-col items-center justify-center gap-3'>
                    <h2 className='font-fixel text-3xl font-semibold text-center'>Join the waitlist for early access.</h2>
                    <div className='flex items-center gap-2'>
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 "></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#04B701] border border-[#09F404]"></span>
                        </span>
                        <p className='text-xl font-fixel text-[#949494] font-medium text-center'>Currently in development</p>
                    </div>
                    <form method="POST" action={FORM_ENDPOINT} className='flex flex-wrap border border-[#9A9A9A] h-14 rounded-full w-full md:w-5/12 justify-between item-center mx-5 md:mx-0'>
                        <input
                            type="email"
                            name="email-field" id="email-field" className='w-2/3 rounded-l-full bg-black backdrop-blur-sm bg-opacity-20 pl-6 md:text-xl text-base focus:outline-none'
                            placeholder='Enter your email'
                            required
                        />
                        <button type="submit" className='bg-white text-center text-black rounded-full font-semibold text-2xl glow-shadow md:px-10 w-1/3'>Join</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default CTASECTION