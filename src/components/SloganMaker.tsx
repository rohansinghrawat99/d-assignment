import React, { useEffect, useMemo, useState } from 'react';
import { SloganData } from "../mock/SloganData";
import SloganList from "./SloganList";

const SloganMaker: React.FC = () => {
    const sloganData = SloganData;
    const [search, setSearch] = useState<string>('')
    const [pageData, setPageData] = useState<string[]>(sloganData.slice(0, 18))
    const [allData, setAllData] = useState<string[]>([])
    const [pageNumber, setPageNumber] = useState<number>(1)
    const [totalPageNumber, setTotalPageNumber] = useState<number>(1)
    const [totalSloganLength, setTotalSloganLength] = useState<number>(18)
    const [isInitialRender, setIsInitialRender] = useState<boolean>(true)

    useEffect(() => {
        setAllData(sloganData)
        setPageData(sloganData.slice(0, 18))
        setTotalSloganLength(sloganData.length)
        setTotalPageNumber(Math.ceil((sloganData.length / 18)))
        setIsInitialRender(false)
    }, []);

    const handlePageNumberChanged = (pageNo: number) => {
        console.log(pageNo, 'PAGE NUMBER')
        const finalSearchedSlogans = allData.slice((((pageNo - 1) * 18) - 1), ((pageNo * 18) - 1))
        console.log(allData, allData.slice((((pageNo - 1) * 18) - 1), ((pageNo * 18) - 1)), 'CHANGE')
        setPageData(finalSearchedSlogans)
    }

    const handleSearch = () => {
        let finalSearchedSlogans: string[] = [];
        const allSearchedSlogans: string[] = [];
        // const allSearchedSlogans = sloganData.filter(e => {
        //     e.includes(search)
        // })
        for (const slogan of sloganData) {
            if (slogan.includes(search)) {
                allSearchedSlogans.push(slogan)
            }
        }
        finalSearchedSlogans = allSearchedSlogans.slice((((pageNumber - 1) * 18) - 1), ((pageNumber * 18) - 1))
        setPageData([])
        console.log(pageData, 'NAHI')
        setPageData(finalSearchedSlogans)
        console.log(allSearchedSlogans, finalSearchedSlogans, 'ACHCHAH')
        setTotalSloganLength(allSearchedSlogans.length)
        setTotalPageNumber(Math.ceil((allSearchedSlogans.length / 18)))
        setAllData(allSearchedSlogans)
    }

    const SloganSection = useMemo(() => (
        <SloganList sloganList={pageData}/>
    ), [pageData])
    return (
        <div className='w-full'>
            <div className='flex flex-col bg-white rounded-lg px-6 md:px-20 xl:px-48 pt-8 md:pt-16 pb-10 md:pb-[66px]'>
                <h1 className='text-2xl md:text-4xl font-semibold mb-4'>Free Slogan Maker</h1>
                <p className='text-sm md:text-xl text-smallText font-normal mb-12'>
                    Simply enter a term that describes your business, and get up to 1,000 relevant slogans for free.
                </p>
                <div className='flex flex-col space-y-2 mb-12'>
                    <h2 className='text-sm md:text-[16px] font-normal'>Word for your slogan</h2>
                    <span className='relative w-64 md:w-80'>
                        <input type="text" className='rounded h-10 md:h-12 w-64 md:w-80 border border-borderBg px-4'
                               onChange={(e) => setSearch(e.target.value)}/>
                        <img src="/icons/cross.svg" alt="" className='absolute top-3 md:top-4 right-4 cursor-pointer'
                             onClick={() => {
                                 setSearch('');
                             }}/>
                    </span>
                </div>
                <div className='flex w-full items-start mb-12'>
                    <button className='bg-heroBg px-4 py-1.5 md:px-6 md:py-3 rounded text-white text-sm md:text-lg'
                            onClick={() => handleSearch()}>
                        Generate Slogans
                    </button>
                </div>
                <span className='bg-dividerBg h-px mb-[52px]'></span>
                <div className='flex w-full justify-between items-center mb-9'>
                    <h2 className='text-sm md:text-xl'>{`${search ? `We have generated ${totalSloganLength} slogans for ${search}` : `We have generated ${totalSloganLength} slogans`}`}</h2>
                    <button
                        className='text-heroBg border border-heroBg rounded text-xs md:text-[16px] px-2 md:px-4 py-1.5'>Download
                        All
                    </button>
                </div>
                {SloganSection}
                <span className='bg-dividerBg h-px mb-6'></span>
                <div className='flex relative w-full items-center justify-center'>
                    <div className='flex space-x-[15px]'>
                        <span
                            className='flex items-center justify-center text-xs md:text-sm h-6 w-6 bg-heroBg rounded-full text-white cursor-pointer'>
                            {pageNumber}
                        </span>
                        <span className='flex items-center justify-center text-xs md:text-sm text-heroBg cursor-pointer'
                              onClick={() => {
                                  setPageNumber(pageNumber + 1)
                                  handlePageNumberChanged(pageNumber + 1)
                              }}>
                            {pageNumber + 1}
                        </span>
                        <span className='flex items-center justify-center text-xs md:text-sm text-heroBg cursor-pointer'
                              onClick={() => {
                                  setPageNumber(pageNumber + 2)
                                  handlePageNumberChanged(pageNumber + 2)
                              }}>
                            {pageNumber + 2}
                        </span>
                        <span className='flex items-end justify-center text-xs md:text-sm text-heroBg'>
                            {'...'}
                        </span>
                        <span className='flex items-center justify-center text-xs md:text-sm text-heroBg cursor-pointer'
                              onClick={() => {
                                  setPageNumber(totalPageNumber)
                                  handlePageNumberChanged(totalPageNumber)
                              }}>
                            {totalPageNumber}
                        </span>
                    </div>
                    {
                        pageNumber !== 1 ?
                            <span className='flex items-center text-heroBg absolute left-0 space-x-1.5 cursor-pointer'
                                  onClick={() => {
                                      setPageNumber(pageNumber - 1)
                                      handlePageNumberChanged(pageNumber - 1)
                                  }}>
                        <img src="/icons/next.svg" alt="" className='h-full rotate-180'/>
                        <h1 className='text-xs md:text-sm'>{'Previous'}</h1>
                    </span> : null
                    }
                    <span className='flex items-center text-heroBg absolute right-0 space-x-1 cursor-pointer'
                          onClick={() => {
                              setPageNumber(pageNumber + 1)
                              handlePageNumberChanged(pageNumber + 1)
                          }}>
                        <h1 className='text-xs md:text-sm'>{'Next'}</h1>
                        <img src="/icons/next.svg" alt="" className='h-full'/>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SloganMaker;