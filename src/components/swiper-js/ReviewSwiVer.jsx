import React from 'react';
import revPic from"../json-servers/skills-pic.json";

import { getImageUrl } from "../../utils";

import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import {Autoplay, FreeMode, Virtual  } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/virtual';

const ReviewSwiVer = () => {
  return (<>
  
      <Swiper
          spaceBetween={20}
          slidesPerView={"auto"}
          slidesOffsetAfter={0}
          direction={'vertical'}
          loop={true}
          freeMode={true}
          speed={8000}
          autoplay={{
              delay: 0,
              disableOnInteraction: false,
          }}
          modules={[Autoplay, FreeMode, Virtual]}
          className="revswip max-h-screen overflow-hidden"
          id='revswip'
      >

        {revPic.map((data, i)=>(
            <SwiperSlide key={i+1} virtualIndex={i+1} className='rounded-xl overflow-hidden'>
                <div className="flex justify-center items-center " >
                    <img src={getImageUrl(data.img)} className="" />
                </div>
            </SwiperSlide>
        ))}

      </Swiper>
  
  
  </>);
};

export default ReviewSwiVer;