import React from 'react';
import reviewData from "./review.json";
import { getImageUrl } from "../../utils";

import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { EffectCoverflow, Autoplay, FreeMode, Virtual  } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/virtual';

const ReviewSwi = () => {
  return (<>
    <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        freeMode={true}
        speed={2000}
        autoplay={{
            delay: 10000,
            disableOnInteraction: false,
        }}
        breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Autoplay, FreeMode, Virtual]}
        className="reviewSwip"
    >

        {reviewData.map((data,i)=>(
            <SwiperSlide className='size-11' key={i} virtualIndex={i}>
                <div className="reviewcard py-10 px-6 bg-global-2 rounded-2xl">
                    <div className='flex justify-between items-center'>
                        <img src={getImageUrl(data.img)} className="rounded-full size-20 object-contain" />
                        <div className='bg-secondary w-fit p-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='size-10' xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 75 65" style={{'enable-background':'new 0 0 75 65'}} xml:space="preserve"><path d="M45.8,1.1v13c9.1,3.1,13.7,9.8,13.7,20H45.8v30.3h28.1V34.1c0-8.1-2.8-15.2-8.3-21.3C60.6,7.4,54,3.5,45.8,1.1z M1.1,1.1v13 c9.1,3.1,13.7,9.8,13.7,20H1.1v30.3h28.1V34.1c0-8.1-2.8-15.2-8.3-21.3C15.9,7.4,9.4,3.5,1.1,1.1z"></path></svg>
                        </div>
                    </div>
                    <p className='text-gray-600 text-balance my-3'>{data.dis}</p>
                    <h4 className='text-primary text-xl pt-2 font-bold capitalize border-t-2 border-main-bg'>{data.name}</h4>
                </div>
            </SwiperSlide >
        ))}

    </Swiper>

  </>)
}

export default ReviewSwi;