import React from 'react';

const Footer: React.FC = () => {
    return (
        <div className='flex flex-col bg-footerBg px-40 pt-16 text-white'>
            <div className='flex items-start mb-10'>
                <img src="/icons/logo.svg" alt="" className='mr-32'/>
                <div className='flex space-x-24'>
                    <div className='flex flex-col space-y-4'>
                        <a href="#">Contact</a>
                        <a href="#">FAQ's</a>
                    </div>
                    <div className='flex flex-col space-y-4'>
                        <a href="#">Tutorials</a>
                        <a href="#">Blog</a>
                    </div>
                    <div className='flex flex-col space-y-4'>
                        <a href="#">Privacy</a>
                        <a href="#">Banned Items</a>
                    </div>
                    <div className='flex flex-col space-y-4'>
                        <a href="#">About</a>
                        <div className='flex items-center space-x-2'>
                            <a href="#">Jobs</a><p className='flex justify-center items-center text-black font-semibold bg-white h-5 w-5 rounded-full'>3</p>
                        </div>
                    </div>
                    <div className='flex flex-col space-y-4'>
                        <a href="#">Facebook</a>
                        <a href="#">Twitter</a>
                        <a href="#">Linkedin</a>
                    </div>
                </div>
            </div>
            <span className='bg-dividerBg h-px mb-6'></span>
            <div className='flex w-full justify-between mb-6'>
                <p className='text-sm font-light'>Dukaan 2020, All rights reserved.</p>
                <div className='flex space-x-1'>
                    <p className='text-sm font-light'>Made in India</p>
                    <img src="/icons/indian-flag.svg" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Footer;