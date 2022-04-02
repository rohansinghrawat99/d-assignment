import React from 'react';

export interface SloganListProps {
    sloganList: string[]
}

const SloganList: React.FC<SloganListProps> = ({ sloganList }) => {
    return (
        <div className='grid grid-cols-2 gap-x-8 gap-y-5 mb-12'>
            {
                sloganList.map((slogan: string, index: number) => (
                    <div className='flex items-center rounded bg-sloganBg px-4 py-2' key={index}>
                        <h3 className='font-normal'>
                            {slogan}
                        </h3>
                    </div>
                ))
            }
        </div>
    )
}

export default SloganList