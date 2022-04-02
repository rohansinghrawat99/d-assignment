import React from 'react';
import tippy from "tippy.js";
import 'tippy.js/dist/tippy.css';
import copy from "copy-to-clipboard";

export interface SloganListProps {
    sloganList: string[]
}

const SloganList: React.FC<SloganListProps> = ({ sloganList }) => {
    tippy('#tt_copy', {
        placement: 'left',
        content: "Click to copy",
        arrow: true,
        animation: 'scale',
        delay: 500,
        duration: 50,
        theme: 'material',
        interactive: true,
    });

    tippy('#tt_copy', {
        placement: 'left',
        content: "Copied",
        arrow: true,
        animation: 'scale',
        duration: 100,
        theme: 'material',
        trigger: 'click'
    });

    const copyToClipboard = (text: string) => {
        copy(text);
    }
    console.log(sloganList, 'SLLSLSLSL')
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 mb-12'>
            {
                sloganList.map((slogan: string, index: number) => (
                    <div className='flex items-center rounded bg-sloganBg px-4 py-2' key={index} id='tt_copy' onClick={() => copyToClipboard(slogan)}>
                        <h3 className='text-sm md:text-[16px] font-normal'>
                            {slogan}
                        </h3>
                    </div>
                ))
            }
        </div>
    )
}

export default SloganList