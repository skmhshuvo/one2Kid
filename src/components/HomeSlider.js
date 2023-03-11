import Image from "next/image";
import slide1img from "../assets/baby_ed.jpg";
import babyGirlImg from "../assets/girl.jpg";
const HomeSlider = () => {
    return (
        <div className="flex gap-7">
            <div className="carousel w-3/4 bg-[#BEACE1]">
                <div id="slide1" className="carousel-item relative w-full max-h-[500px] overflow-hidden">
                    <div className="flex items-center mx-32 w-1/2">
                        <div className="flex flex-col gap-4">
                            <h2 className="text-6xl font-bold">Customized T-Shirt <span className="text-white font-semibold">For Your Sweet Baby</span></h2>
                            <p>Minimal and modern HTML e-commerce template. It was built for your kids store, kids fashion, toys store</p>
                            <button className="btn bg-red-400 border-0 w-36">Design Now</button>
                        </div>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a> 
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div> 
            </div>

            <div className="w-1/4 flex flex-col gap-5">
                <div className="h-60 overflow-hidden card rounded-t-none bg-[#B5D8E5]"></div>
                <div className="h-60 overflow-hidden card bg-[#E7E7E7]"></div>
            </div>
        </div>
    );
};

export default HomeSlider;