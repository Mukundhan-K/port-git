import React from 'react';
import { getImageUrl } from "../utils";


const Footer = () => {
  return (<><section className=''>
    
    <div id="contactBarBody" className=' w-full bg-secondary '>
      <div className='h-full w-full container mx-auto p-5 flex justify-between items-center'>
        <h2 className='text-4xl md:text-5xl !font-outfit footHead'>Drop us a  Mail</h2>
        <a href="">
          <img src={getImageUrl("telegram.png")} className="h-16 w-auto object-contain" />
        </a>
      </div>
    </div>

    <div id="footMenuBody" className='container mx-auto px-5 py-10 grid grid-cols-10 gap-x-3 gap-y-6 place-content-center'>

        <div id="footLogo" className='col-span-10 lg:col-span-5 pb-9 sm:border-b-2 lg:border-0 border-gray-400 flex justify-center lg:justify-start items-center'>
          <div id="footLogoBox" className='w-fit bg-secondary rounded-3xl grid place-content-center '>
            <img src={getImageUrl("logo-2-att.png")} className="size-44" style={{filter: 'invert(100%) sepia(7%) saturate(13%) hue-rotate(291deg) brightness(106%) contrast(101%)'}} />
          </div>
        </div>


        <div id="footMenu" className='col-span-full sm:col-span-4 lg:col-span-2 mr-8 px-5 sm:border-r-2 lg:border-x-2 border-gray-400 flex flex-col justify-center items-center'>
            <h4 className='w-full capitalize font-bold text-2xl text-secondary'>Links</h4>
            <ul className='w-full ml-10 mt-3 text-white capitalize grid gap-2'>
              <li><a href="">home</a></li>
              <li><a href="">about</a></li>
              <li><a href="">services</a></li>
              <li><a href="">works</a></li>
              <li><a href="">contact</a></li>
            </ul>
        </div>

        <div id="footSocial" className='col-span-full sm:col-span-6 lg:col-span-3 flex flex-col items-center justify-center'>

          <div className="w-full p-2 mb-4 flex items-center gap-3">
              <div className='h-fit bg-secondary rounded-xl p-1 grid place-content-center'>
                  <img src={getImageUrl("image12.png")} className="size-7 object-cover" />
              </div>
              <div>
                  <h4 className='capitalize font-semibold text-secondary'>Email Address</h4>
                  <p className='text-xl font-medium text-white'>help@harivideoeditor.com</p>
              </div>
          </div>

          <div className="w-full p-2 mb-4 flex items-center gap-3">
              <div className='h-fit bg-secondary rounded-xl p-1 grid place-content-center'>
                  <img src={getImageUrl("image13.png")} className="size-7 object-cover" />
              </div>
              <div>
                  <h4 className='capitalize font-semibold text-secondary'>LinkedIn</h4>
                  <p className='text-xl font-medium text-white'>harivideoeditor</p>
              </div>
          </div>

          <div className="w-full p-2 mb-4 flex items-center gap-3">
              <div className='h-fit bg-secondary rounded-xl p-1 grid place-content-center'>
                  {/* <img src={getImageUrl("image12.png")}  /> */}
                  <svg className="size-7 fill-white object-cover" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" style={{"enable-background":"new 0 0 100 100;"}} xml:space="preserve"><path d="M73.3,99H26.7C12.5,99,1,87.5,1,73.3V26.7C1,12.5,12.5,1,26.7,1h46.6C87.5,1,99,12.5,99,26.7v46.6C99,87.5,87.5,99,73.3,99z  M26.7,7.3C16,7.3,7.3,16,7.3,26.7v46.6C7.3,84,16,92.7,26.7,92.7h46.6c10.7,0,19.4-8.7,19.4-19.4V26.7C92.7,16,84,7.3,73.3,7.3 H26.7z"></path><path d="M50,73.8c-13.1,0-23.8-10.7-23.8-23.8c0-13.1,10.7-23.8,23.8-23.8c13.1,0,23.8,10.7,23.8,23.8C73.8,63.1,63.1,73.8,50,73.8z  M50,32.5c-9.6,0-17.5,7.8-17.5,17.5S40.4,67.5,50,67.5S67.5,59.6,67.5,50S59.6,32.5,50,32.5z"></path><path d="M76.9,28.6c-2.9,0-5.2-2.3-5.2-5.2c0-2.9,2.3-5.2,5.2-5.2c2.9,0,5.2,2.3,5.2,5.2C82.2,26.3,79.8,28.6,76.9,28.6z M76.9,22.3 c-0.6,0-1.1,0.5-1.1,1.1s0.5,1.1,1.1,1.1c0.6,0,1.1-0.5,1.1-1.1S77.5,22.3,76.9,22.3z"></path></svg>
              </div>
              <div>
                  <h4 className='capitalize font-semibold text-secondary'>Instagram</h4>
                  <p className='text-xl font-medium text-white'>harivideoeditor</p>
              </div>
          </div>

        </div>
    </div>

    <div id="copyBody" className=' w-full border-t-2 border-gray-400 '>
      <p className='container mx-auto py-2 text-white text-base flex justify-center items-center'>
        © 2025 harivideoedit. All Rights Reserved
      </p>
    </div>


  </section></>)
}

export default Footer;