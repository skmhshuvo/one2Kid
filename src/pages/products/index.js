import ProductCard from '@/components/ProductCard';
import Image from 'next/image';
import React from 'react';

import cardThumb1 from "../../assets/cardThumb.webp";
import cardThumb2 from "../../assets/cardThumb2.webp";
import cardThumb3 from "../../assets/cardThumb3.webp";
import cardThumb4 from "../../assets/cardThumb4.webp";
import cardThumb5 from "../../assets/cardThumb5.webp";

const Products = () => {
    return (
        <div>
            <h2 className=' text-3xl font-semibold'>Products</h2>
            <div className='grid md:grid-cols-5 gap-6'>
                <ProductCard image={cardThumb1}/>
                <ProductCard image={cardThumb2}/>
                <ProductCard image={cardThumb3}/>
                <ProductCard image={cardThumb4}/>
                <ProductCard image={cardThumb5}/>
            </div>
        </div>
    );
};

export default Products;