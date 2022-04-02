import React from 'react';

interface FreeProductCardProps {
    title: string,
    description: string,
    image_url: string
}
const FreeProductCard: React.FC<FreeProductCardProps> = ({title, description, image_url}) => {
    return (
        <div className='flex flex-col w-88'>
            <img src={image_url} alt="" className='mb-4'/>
            <h1 className='text-lg font-semibold mb-1'>{title}</h1>
            <p className='text-smallText'>{description}</p>
        </div>
    )
}

export default FreeProductCard;