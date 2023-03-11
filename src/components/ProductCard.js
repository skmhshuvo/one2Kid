import Image from "next/image";

const ProductCard = ({image}) => {
    return (
        <div className='border shadow-sm overflow-hidden'>
            <a href="#"><Image src={image} alt="" className=' w-full hover:scale-110'/></a>
            <div className='p-6'>
                <a href="#" className='text-slate-600'>3pcs Baby Girl 95% Cotton Ruffle Short-sleeve Letter</a>
                <div className='flex items-center justify-between mt-5'>
                    <h2 className='text-3xl font-bold text-red-400'>680 tk</h2>
                    <a href="#" className='btn btn-sm bg-black rounded-none capitalize'>Buy Now</a>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;