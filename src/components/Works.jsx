import React from 'react';
import worksData from "./json-servers/works.json";
 
const MyWorks = () => {
  return (<>
    <section id="works" className='container mx-auto px-5 py-10 lg:p-10'>

        <div className='headingBody'>
            <h4 className='text-white'>on TRENDING</h4>
            <h2 className='!text-white'>our works</h2>
        </div>

        <div id="worksBody" className=' mt-10 grid grid-cols-2 md:grid-cols-3 gap-10'>

            {worksData.map((data,i)=>(
                <div className="worksBlock" key={i}>
                    <div className="worksCard grid">
                        <iframe
                            className="youtube-video w-full h-full aspect-video rounded-t-xl"
                            src={data.src}
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                        ></iframe>
                        <div className='workShad py-3 pl-3 bg-global-2 rounded-bl-xl rounded-br-xl flex justify-between items-center relative'>
                            <h4 className='font-bold text-main-bg capitalize'>Work {i+1}</h4>
                            <a href={data.src} target='_blank' className='w-fit bg-primary p-3 rounded-xl curvedShad absolute bottom-0 right-0'>
                                <svg className='size-5' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 120 120' style={{'enable-background':'new 0 0 120 120'}} xml:space='preserve'><path d='M117.6,63.4c1.8-1.8,1.8-4.9,0-6.7L87.8,26.8c-1.8-1.8-4.6-2.1-6.6-0.4c-2.2,1.8-2.2,5-0.3,6.9l26.7,26.7c0,0,0.1,0.1,0,0.1 L81.1,86.5c-1.8,1.8-2.1,4.6-0.4,6.6c1.8,2.2,5,2.2,6.9,0.3L117.6,63.4z M5.6,64.8l108.6-0.1l0.1-0.1l0-9.3l-0.1-0.1H5.8 c-2.7,0-4.8,2.2-4.8,4.8l0,0C1,62.7,3,64.7,5.6,64.8z'/></svg>
                            </a>
                        </div>
                    </div>
                </div>
            ))}

        </div>

    </section>
  </>)
}

export default MyWorks;