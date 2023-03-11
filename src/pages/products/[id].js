import SubHeading from '@/components/SubHeading';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import React from 'react';

//Dummy
import slideImg1 from '../../assets/cardThumb2.webp';
import slideImg2 from '../../assets/cardThumb6.webp';

const Details = () => {
    return (
        <div className='md:grid md:grid-cols-2 gap-20'>
            <div>
                <div className="carousel w-full">
                    <div id="item1" className="carousel-item w-full">
                        <Image src={slideImg1} className="w-full" alt=''/>
                    </div> 
                    <div id="item2" className="carousel-item w-full">
                        <Image src={slideImg2} className="w-full" alt=''/>
                    </div> 
                    <div id="item3" className="carousel-item w-full">
                        <Image src={slideImg1} className="w-full" alt=''/>
                    </div> 
                    <div id="item4" className="carousel-item w-full">
                        <Image src={slideImg1} className="w-full" alt=''/>
                    </div> 
                    <div id="item5" className="carousel-item w-full">
                        <Image src={slideImg1} className="w-full" alt=''/>
                    </div> 
                </div> 
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn-ghost w-40"><Image src={slideImg1} className="w-full" alt=''/></a> 
                    <a href="#item2" className="btn-ghost w-40"><Image src={slideImg2} className="w-full" alt=''/></a> 
                    <a href="#item3" className="btn-ghost w-40"><Image src={slideImg1} className="w-full" alt=''/></a>
                    <a href="#item4" className="btn-ghost w-40"><Image src={slideImg1} className="w-full" alt=''/></a>
                    <a href="#item5" className="btn-ghost w-40"><Image src={slideImg1} className="w-full" alt=''/></a>
                    <a href="#item5" className="btn-ghost w-40"><Image src={slideImg1} className="w-full" alt=''/></a>
                </div>
            </div>

            <div className='py-10'>
                <SubHeading title={'3pcs Sunflower Print Short-sleeve Baby Set'}/>
                <div className='flex justify-between items-center bg-emerald-100 p-5'>
                    <h3 className='text-2xl text-emerald-500 font-semibold'>Price: 690 tk</h3>
                    <a href='#' className='btn bg-black'>Buy Now</a>
                </div>
                <p className='font-bold mt-5'>Size:</p>
                <div className='flex items-center gap-3'>
                    <button className='border p-1 text-sm font-bold text-red-400'>0-3 Months</button>
                    <button className='border p-1 text-sm font-bold text-slate-600 hover:text-red-400'>3-6 Months</button>
                    <button className='border p-1 text-sm font-bold text-slate-600 hover:text-red-400'>6-12 Months</button>
                    <button className='border p-1 text-sm font-bold text-slate-600 hover:text-red-400'>12-24 Months</button>
                </div>

                <p className='font-bold mt-5'>Description:</p>
                <div className='mb-5'>
                    <p className='flex items-center gap-2 mb-2'><CheckCircleIcon className='h-5 w-5 text-emerald-400'/>Each size includes：1 top &1 jeans &1 headband</p>
                    <p className='flex items-center gap-2 mb-2'><CheckCircleIcon className='h-5 w-5 text-emerald-400'/>Soft and comfy</p>
                    <p className='flex items-center gap-2 mb-2'><CheckCircleIcon className='h-5 w-5 text-emerald-400'/>Elasticized collar</p>
                    <p className='flex items-center gap-2 mb-2'><CheckCircleIcon className='h-5 w-5 text-emerald-400'/>Elasticized waist on jeans</p>
                    <p className='flex items-center gap-2 mb-2'><CheckCircleIcon className='h-5 w-5 text-emerald-400'/>Two side pockets on jeans</p>
                    <p className='flex items-center gap-2 mb-2'><CheckCircleIcon className='h-5 w-5 text-emerald-400'/>Ripped design on jeans</p>
                    <p className='flex items-center gap-2 mb-2'><CheckCircleIcon className='h-5 w-5 text-emerald-400'/>Material: 92% Polyester, 8% Spandex (top)</p>
                    <p className='flex items-center gap-2 mb-2'><CheckCircleIcon className='h-5 w-5 text-emerald-400'/>85% Cotton, 13% Polyester, 2% Spandex (jeans)</p>
                    <p className='flex items-center gap-2 mb-2'><CheckCircleIcon className='h-5 w-5 text-emerald-400'/>Machine wash, tumble dry</p>
                    <p className='flex items-center gap-2 mb-2'><CheckCircleIcon className='h-5 w-5 text-emerald-400'/>Imported</p>
                </div>

            </div>
        </div>
    );
};

export default Details;