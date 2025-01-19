import React from 'react'
import { getImageUrl } from '../utils';
import AboutSwi  from "./swiper-js/AboutSwi";

const About = () => {
  return (<>

  {/* about swipper text carousel */}

  <AboutSwi />
  
  <section id='aboutContainer' className='py-10 md:py-24 px-5 md:px-10 bg-global-1 '>

    <div id="about" className='container mx-auto'>

        <div id="aboutBody" className='grid grid-cols-1 md:grid-cols-2 gap-x-14 place-content-center'>

            <div id="aboutImgBlock" className='mb-16 md:mb-0 lg:px-10 grid grid-cols-2 gap-x-10 relative'>
                <div>
                    <img src={getImageUrl("about-2.png")} className="mt-10 animate-mbounce object-cover h-full w-full rounded-2xl" />
                </div>
                <div className='p-5 bg-white rounded-full absolute z-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2'>
                    <svg viewBox="0 0 100 100" height="100" width="100" xmlns="http://www.w3.org/2000/svg"> <path id="circlePath" fill='#fff' d="M 10, 50
                    a 40,40 0 1,1 80,0
                    40,40 0 1,1 -80,0"/>
                        <text>
                            <textPath href="#circlePath" fill="#000">
                                contact us for video edits  *
                            </textPath>
                        </text>
                    </svg>
                </div>
                <div>
                    <img src={getImageUrl("about-1.png")} className=" mb-10 animate-mbounce2 object-cover h-full w-full rounded-2xl" />
                </div>
            </div>

            <div id="aboutBlock" className='flex flex-col items-start justify-center gap-y-5'>

                <div className="headingBody">
                    <h4>About Us</h4>
                    <h2 className='font-catamaran'>High Performing <span>video editor</span></h2>
                    <p>I’m here to bring your vision to life and help your content stand out. Let’s collaborate and make something incredible</p>
                </div>
                <div id="aboutContent">
                    <div id="aboutCardContent" className='mt-6 flex justify-center items-center'>
                        <img src={getImageUrl("counter-bg.png")} alt="" />
                        <span>When you're editing, you want to be the perfect appreciator, not another writer.</span>
                    </div>
                    <div id="abtCounter" className='mt-6 lg:pl- flex justify-start items-center gap-x-20'>
                        <div className="countCard">
                            <h2>150+</h2>
                            <div>global clients</div>
                        </div>
                        <div className="countCard">
                            <h2>5+</h2>
                            <div>yrs of Exp</div>
                        </div>
                    </div>
                </div>
                <div className='w-full mt-3 pt-6 border-0 border-t-2 border-main-bg'>
                    <button><a href="">About Us</a></button>
                </div>

            </div>

        </div>

    </div>
  </section></>);
};

export default About;