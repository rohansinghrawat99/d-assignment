import React from 'react';

const SloganFeatures: React.FC = () => {
    return (
        <div className='bg-featuresBg pt-10 md:pt-[4.75rem] pb-16 px-10 md:px-20 xl:px-48'>
            <div className='flex flex-col items-center md:flex-row space-y-8 md:space-x-8 md:space-y-0 md:items-start text-center'>
                <div className='flex flex-1 flex-col justify-center items-center'>
                    <img src="/icons/search.svg" alt="" className='mb-8'/>
                    <h1 className='text-lg md:text-xl font-galanoGrotesqueSemiBold font-semibold mb-2'>Search</h1>
                    <p className='text-sm md:text-[16px] text-smallText'>Simply add a keyword or a term related to your business in the slogan maker search box. Wait for the magic to happen.</p>
                </div>
                <div className='flex flex-1 flex-col justify-center items-center'>
                    <img src="/icons/select.svg" alt="" className='mb-8'/>
                    <h1 className='text-lg md:text-xl font-galanoGrotesqueSemiBold font-semibold mb-2'>Select</h1>
                    <p className='text-sm md:text-[16px] text-smallText'>Choose from thousands of options generated by the slogan maker that fit your needs.</p>
                </div>
                <div className='flex flex-1 flex-col justify-center items-center'>
                    <img src="/icons/stand-out.svg" alt="" className='mb-6'/>
                    <h1 className='text-lg md:text-xl font-galanoGrotesqueSemiBold font-semibold mb-2'>Stand Out</h1>
                    <p className='text-sm md:text-[16px] text-smallText'>Congrats on your new slogan. It's time to win the world!</p>
                </div>
            </div>
        </div>
    );
}

export default SloganFeatures;