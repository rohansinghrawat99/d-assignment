import React from 'react';
import { FreeProductsData } from "../mock/FreeProductsData";
import FreeProductCard from "./FreeProductCard";

const FreeProducts: React.FC = () => {
    const freeProductsData = FreeProductsData;
    return (
        <div className='flex flex-col bg-white py-20 px-40'>
            <h1 className='text-3xl font-semibold mb-12'>Try our other free products</h1>
            <div className='grid grid-cols-3 gap-8'>
                {
                    freeProductsData.map((e, index) => (<FreeProductCard key={index} title={e.title} description={e.description} image_url={e.image_url} />))
                }
            </div>
        </div>
    )
}

export default FreeProducts;