import React from 'react';
import { getImageUrl } from "../utils";
import skillJson from "./json-servers/skills-pic.json";

const Form= () => {
  return (<><section id='contForm' className=' bg-global-1 px-5 lg:px-10 py-10'>
    <div id="contFormContainer" className='container mx-auto'>

        <div className='headingBody'>
            <h4 className=''>CONTACT US</h4>
            <h2 className='!text-main-bg'>Let’s talk. just say   hi....</h2>
        </div>

        <div id="contBody" className='grid grid-cols-1 lg:grid-cols-2 mt-5 md:mt-12 gap-6'>

            <div id="contImgBlock" className='mr-5 hidden lg:block'>
                <img src={getImageUrl("form-img.jpg")} className="" />
            </div>

            <div id="contBlock" className='grid grid-cols-1 place-content-center'>

                <div className=" p-4 mb-10 border-2 border-gray-500 rounded-2xl flex gap-3">
                    <div className='bg-secondary rounded-xl p-2'>
                        <img src={getImageUrl("image12.png")} className="size-14 object-cover" />
                    </div>
                    <div>
                        <h4 className='capitalize font-bold text-secondary'>Email Address</h4>
                        <p className='text-xl font-bold text-main-bg'>help@harivideoeditor.com</p>
                    </div>
                </div>

                <form action="" method="post" className='flex flex-col justify-center items-center'>
                  <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-x-5'>
                    <input type="text" name="" id="" placeholder='your first Name' />
                    <input type="text" name="" id="" placeholder='your last Name' />
                  </div>
                  <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-x-5'>
                    <input type="email" name="" id="" placeholder='your email' />
                    <input type="tel" name="" id="" placeholder='your mobile number' />
                  </div>
                  <input type="text" name="" id="" placeholder='subject' className='hidden lg:block' />
                  <textarea name="" id="" placeholder='your message'></textarea>

                  <button type='submit' className='self-end'>
                    <a href="">Submit</a>
                  </button>
                </form>
            </div>
        </div>

        <div id="skillGallBody" className='mt-16'>
          <div id="skillGallBlock" className='flex gap-x-5 items-center justify-center'>

              {skillJson.map((data, i)=>(
                  <div className={"skillGallCard min-h-20 md:min-h-36 lg:min-h-72 max-w-1/5 md:w-auto bg-cover bg-no-repeat bg-center grow duration-500 rounded-2xl hover:grow-[2] flex justify-end items-end "} 
                        key={i+1} style={{"backgroundImage" : `url(${getImageUrl(data.img)})`}}> 
                      <img src={getImageUrl(data.img)} className="hidden" />
                      <h4 className='px-2 pb-7 pt-5 w-fit texto rotate-180 bg-secondary hidden md:block'>{data.name}</h4>
                  </div>
              ))}
        
          </div>
        </div>

    </div>    
  </section></>)
}

export default Form;
