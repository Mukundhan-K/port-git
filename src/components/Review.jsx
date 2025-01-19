import React from 'react';
import ReviewSwi from './swiper-js/ReviewSwi';
import ReviewSwiVer from './swiper-js/ReviewSwiVer';

const Review = () => {
  return (<><section id='review' className='p-5 lg:py-10 mt-5'>


        <div id="reviewBody" className='container mx-auto grid grid-cols-4'>

            <div id="reviewSwiper" className='col-span-4 xl:col-span-3'>
                <div className="headingBody mb-14 ">
                  <h4>customer</h4>
                  <h2 className='!text-white'>testimonials</h2>
                </div>

                <ReviewSwi />
            </div>

            <div id="reviewPrice" className='hidden xl:flex max-h-full overflow-hidden px-5 py-10 border-l-2 border-dashed border-white  justify-center items-center'>
              <ReviewSwiVer />
            </div>

        </div>
    
  </section></>)
}

export default Review;