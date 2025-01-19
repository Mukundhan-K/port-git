import React from 'react'
import { getImageUrl } from '../utils';
import expDatas from "./json-servers/expirence.json";

const Experience = () => {
  return (<><section id='experience' className='container m-auto py-10 px-5 lg:pt-24 lg:pb-16'>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
        <div className='headingBody'>
            <h4 className='text-white'>Agency Services</h4>
            <h2 className='!text-white'>Our Strategy & Patented Technology Serve As Our Driving Force.</h2>
        </div>
        <div className="h-after hidden md:flex justify-start items-end">
            <h4 className='ml-12 w-4/5 text-global-1 text-pretty'>Nibh praesent tristique magna sit. Aliquam etiam erat velit scelerisque in dictum. Justo donec enim diam vulputate. Leo integer malesuada nunc vel.</h4>
        </div>
    </div>

    <div id="expBody" className='mt-10 lg:mt-20 grid grid-cols-1 gap-10'>
        <div id="expImgBlock" className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>

            {expDatas.map((data)=>(

                <div className="expimg p-6 border-2 border-gray-500 rounded-2xl flex gap-3" key={data.id}>
                    <div>
                        <img src={getImageUrl(data.image)} className="size-14 object-cover" />
                    </div>
                    <div>
                        <h4 className='capitalize font-bold text-secondary'>{data.name}</h4>
                        <p className='text-base'>{data.dis}</p>
                    </div>
                </div>

            ))}

        </div>

    </div>
  </section></>);
};

export default Experience;