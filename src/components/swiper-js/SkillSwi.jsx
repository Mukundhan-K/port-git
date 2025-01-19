import React from 'react';

import SkillsCardContent from "./Skill-swi.json";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/virtual';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay, FreeMode, Virtual } from 'swiper/modules';

const SkillSwi = () => {

  function SkillSwiCard({name, dis,svg}) {

    let svgicon = svg ;
    let blob = new Blob([svgicon], {type: 'image/svg+xml'});
    let url = URL.createObjectURL(blob);

    return (<>
      <div className="skillSwiCard w-fit py-10 px-8 rounded-2xl border-2 border-main-bg">
        <div className="skillSvg">
          <img src={url} className="size-32 text-primary" />
        </div>
        <h3 className='text-3xl text-main-bg duration-300 font-bold capitalize mt-6 mb-2'>{name}</h3>
        <p className='text-gray-500 text-base'>{dis}</p>
      </div>
    </>);
  };

  return (<>

      <Swiper
          spaceBetween={20}
          centeredSlides={true}
          loop={true}
          freeMode={true}
          speed={2000}
          autoplay={{
              delay: 1000,
              disableOnInteraction: false,
          }}
          modules={[Virtual, Autoplay, FreeMode]}
          className="SkillSwi"
          id='SkillSwi'
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
                slidesPerView: '3',
                spaceBetween: 50,
              },
            }}
      >

        {SkillsCardContent.map((slideContent, i) => (
            <SwiperSlide key={slideContent} virtualIndex={i}>
              {<SkillSwiCard  {...slideContent} />}
            </SwiperSlide>
        ))}



      </Swiper>

  </>)
}

export default SkillSwi