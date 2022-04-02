import React, { useEffect, useState } from 'react';
import { SloganData } from "../mock/SloganData";
import SloganList from "./SloganList";

const SloganMaker: React.FC = () => {
    const [search, setSearch] = useState<string>('')
    const [pageData, setPageData] = useState<string[]>([])
    const [pageNumber, setPageNumber] = useState<number>(1)
    const [totalPageNumber, setTotalPageNumber] = useState<number>(1)
    const [totalSloganLength, setTotalSloganLength] = useState<number>(18)
    const sloganData = SloganData;

    useEffect(() => {
        setPageData(sloganData.slice(0, 18))
        setTotalSloganLength(sloganData.length)
        setTotalPageNumber(Math.ceil((sloganData.length / 18)))
    }, []);

    const handleSearch = () => {
        let finalSearchedSlogans: string[] = [];
        const allSearchedSlogans = sloganData.filter(e => {
            e.includes(search)
        })
        setTotalSloganLength(allSearchedSlogans.length)
        setTotalPageNumber(Math.ceil((allSearchedSlogans.length / 18)))
        finalSearchedSlogans = allSearchedSlogans.slice((((pageNumber - 1) * 18) - 1), ((pageNumber * 18) - 1))
        setPageData(finalSearchedSlogans)
    }
    return (
        <div className='w-full'>
            <div className='flex flex-col bg-white rounded-lg px-48 pt-16 pb-[66px]'>
                <h1 className='text-4xl font-semibold mb-4'>Free Slogan Maker</h1>
                <p className='text-xl text-smallText font-normal mb-12'>
                    Simply enter a term that describes your business, and get up to 1,000 relevant slogans for free.
                </p>
                <div className='flex flex-col space-y-2 mb-12'>
                    <h2 className='font-normal'>Word for your slogan</h2>
                    <span className='relative w-80'>
                        <input type="text" className='rounded h-12 w-80 border border-borderBg px-4'
                               onChange={(e) => setSearch(e.target.value)}/>
                        <img src="/icons/cross.svg" alt="" className='absolute top-4 right-4'
                             onClick={() => setSearch('')}/>
                    </span>
                </div>
                <div className='flex w-full items-start mb-12'>
                    <button className='bg-heroBg px-6 py-3 rounded text-white text-lg' onClick={() => handleSearch()}>
                        Generate Slogans
                    </button>
                </div>
                <span className='bg-dividerBg h-px mb-[52px]'></span>
                <div className='flex w-full justify-between items-center mb-9'>
                    <h2 className='text-xl'>{`We have generated ${totalSloganLength} slogans for ${search}`}</h2>
                    <button className='text-heroBg border border-heroBg rounded px-4 py-1.5'>Download All</button>
                </div>
                <SloganList sloganList={pageData}/>
                <span className='bg-dividerBg h-px mb-6'></span>
                <div className='flex relative w-full items-center justify-center'>
                    <div className='flex space-x-[15px]'>
                        <span className='flex items-center justify-center h-6 w-6 bg-heroBg rounded-full text-white cursor-pointer' onClick={() => setPageNumber(pageNumber)}>
                            {pageNumber}
                        </span>
                        <span className='flex items-center justify-center text-heroBg cursor-pointer' onClick={() => setPageNumber(pageNumber + 1)}>
                            {pageNumber + 1}
                        </span>
                        <span className='flex items-center justify-center text-heroBg cursor-pointer' onClick={() => setPageNumber(pageNumber + 2)}>
                            {pageNumber + 2}
                        </span>
                        <span className='flex items-end justify-center text-heroBg'>
                            {'...'}
                        </span>
                        <span className='flex items-center justify-center text-heroBg cursor-pointer' onClick={() => setPageNumber(totalPageNumber)}>
                            {totalPageNumber}
                        </span>
                    </div>
                    <span className='flex items-center text-heroBg absolute left-0 space-x-1.5'>
                        <img src="/icons/next.svg" alt="" className='h-full rotate-180'/>
                        <h1 className='text-sm'>{'Previous'}</h1>
                    </span>
                    <span className='flex items-center text-heroBg absolute right-0 space-x-1'>
                        <h1 className='text-sm'>{'Next'}</h1>
                        <img src="/icons/next.svg" alt="" className='h-full'/>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SloganMaker;