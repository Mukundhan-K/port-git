import React from 'react';
import { getImageUrl } from "../utils";
import SkillSwi from "./swiper-js/SkillSwi";

const Skills = () => {
  return (<><section id='skills' className='py-10 px-5 bg-gray-100'>

    <div id="skillsContainer" className="container mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
            <div className='headingBody'>
                <h4 className=''>Agency Services</h4>
                <h2 className='!text-main-bg'>Our Strategy & Patented Technology Serve As Our Driving Force.</h2>
            </div>
            <div className="h-after hidden md:flex justify-start items-end">
                <h4 className='ml-12 w-4/5 text-main-bg text-pretty'>Nibh praesent tristique magna sit. Aliquam etiam erat velit scelerisque in dictum. Justo donec enim diam vulputate. Leo integer malesuada nunc vel.</h4>
            </div>
        </div>

        <div id="skillSlidBody" className='mt-5 lg:mt-10 p-5 lg:p-10 pb-0 bg-transparent'>
            <div id="skillSlidBlock" className=''>
                
                <SkillSwi />

            </div>
        </div>

    </div>    

  </section></>);
};

export default Skills;