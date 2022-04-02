import React from 'react';
import SloganMaker from "./SloganMaker";
import SloganFeatures from "./SloganFeatures";
import FreeProducts from "./FreeProducts";
import Footer from "./Footer";

const HeroSection: React.FC = () => {
    return (
        <div className='bg-heroBg h-80 w-full absolute top-0'>
            <div className='flex flex-col w-full items-center px-40 pt-6 space-y-16 mb-20'>
                <div className='flex w-full justify-between'>
                    <img src="/icons/logo.svg" alt=""/>
                    <div className='flex space-x-8 text-lg'>
                        <button className='text-white'>
                            Sign In
                        </button>
                        <span className='text-black bg-white px-6 py-3 rounded'>
                        Dukaan for PC
                    </span>
                    </div>
                </div>
                <SloganMaker />
            </div>
            <SloganFeatures />
            <FreeProducts />
            <Footer />
        </div>
    )
}

export default HeroSection;