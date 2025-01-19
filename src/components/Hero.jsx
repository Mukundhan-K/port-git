import React from 'react'
import { getImageUrl } from '../utils';

const Hero = () => {
  return (<div><section id='hero' className='overflow-hidden '>
    <div className="heroContainer container mx-auto px-5 md:px-10 py-8 md:py-0">
        <div id="heroBody" className='relative z-10 grid grid-cols-1 md:grid-cols-2 justify-center items-center'>
            <div id="heroBlock" className='space-y-8 order-1 md:order-first text-center md:text-left'>
                <small className='font-outfit text-base text-secondary capitalize relative -bottom-6'>video editor</small>
                <h1 className='text-6xl font-bold'>Hi, I’m <span>Harry</span> </h1>
                <p>
                    Hi, I’m Hari, a skilled video editor with expertise in DaVinci Resolve, Adobe Premiere Pro and CapCut. I specialize in crafting high-quality edits for tech reviews, productivity channels, reaction videos, and other YouTube content.
                </p>
                <button>
                    <a href="" >Contact Me</a>
                </button>
            </div>
            <div id="heroImgBlock" className='p-10'>
                <figure>
                    <div className='w-full h-full rounded-full overflow-hidden flex justify-center '>
                        <img src={getImageUrl("hero-banner.png")} className='max-w-96 md:max-h-full w-auto mx-auto object-contain' />
                    </div>
                </figure>
                <div className="heroOverlay"></div>
                <div className="heroOverlay heroOverlay2"></div>
            </div>
        </div>

    </div>
  </section></div>);
};

export default Hero;