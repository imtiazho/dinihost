import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// import required modules
import { Autoplay } from 'swiper/modules';
import banner from '../../Media/banner.jpg';

const TopBanner = () => {
    return (
        <div className='w-full'>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
            >
                <SwiperSlide>
                    <div className='relative flex justify-center items-center'>
                        <div className='absolute flex flex-col items-center w-[70%] mx-auto text-white'>
                            <p className='text-[50px] font-[700]'>Dummy Text that you might change</p>
                            <p className='text-[15px] w-[60%]'>We have servers in five countries. So you can choose your preferred location while buying hosting. USA, Germany, India, Bangladesh & Singapore.</p>
                        </div>
                        <img className='object-cover h-[500px] w-full' src={banner} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative flex justify-center items-center'>
                        <div className='absolute flex flex-col items-center w-[70%] mx-auto text-white'>
                            <p className='text-[50px] font-[700]'>Dummy Text that you might change</p>
                            <p className='text-[15px] w-[60%]'>We have servers in five countries. So you can choose your preferred location while buying hosting. USA, Germany, India, Bangladesh & Singapore.</p>
                        </div>
                        <img className='object-cover h-[500px] w-full' src={banner} alt="" />
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default TopBanner;