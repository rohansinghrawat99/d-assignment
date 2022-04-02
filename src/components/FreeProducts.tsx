import React from 'react';
import { FreeProductsData } from "../mock/FreeProductsData";
import FreeProductCard from "./FreeProductCard";

const FreeProducts: React.FC = () => {
    const freeProductsData = FreeProductsData;
    return (
        <div className='flex flex-col bg-white py-14 md:py-20 px-10 md:px-20 xl:px-48'>
            <h1 className='text-xl md:text-3xl font-semibold mb-12'>Try our other free products</h1>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3'>
                {
                    freeProductsData.map((e, index) => (<FreeProductCard key={index} title={e.title} description={e.description} image_url={e.image_url} />))
                }
            </div>
        </div>
    )
}

export default FreeProducts;