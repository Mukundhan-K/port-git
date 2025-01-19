import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay, FreeMode } from 'swiper/modules';

const AboutSwi = () => {
  return (<>
  
      <Swiper
          spaceBetween={0}
          slidesPerView={"auto"}
          centeredSlides={true}
          slidesOffsetAfter={0}
          loop={true}
          freeMode={true}
          speed={8000}
          autoplay={{
              delay: 0,
              disableOnInteraction: false,
          }}
          pagination={{
              clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, FreeMode]}
          className="mySwiper"
          id='mySwiper'
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
                slidesPerView: 'auto',
                spaceBetween: 50,
              },
            }}
      >
          <SwiperSlide><pre>Web Designing    * </pre></SwiperSlide>
          <SwiperSlide><pre>Video Editing    * </pre></SwiperSlide>
          <SwiperSlide><pre>Reels Editing    * </pre></SwiperSlide>
          <SwiperSlide><pre>Logo Designing    * </pre></SwiperSlide>
          <SwiperSlide><pre>Web Designing    * </pre></SwiperSlide>
          <SwiperSlide><pre>Video Editing    * </pre></SwiperSlide>
          <SwiperSlide><pre>Reels Editing    * </pre></SwiperSlide>
          <SwiperSlide><pre>Logo Designing    * </pre></SwiperSlide>
      </Swiper>
  
  
  </>);
};

export default AboutSwi;