import React, {useState} from 'react';
import { getImageUrl } from "../utils";

const Navbar = () => {

 const [menuTog, setMenuTog] = useState(true);

  return (<><section className='navBar py-10 px-5 sm:p-10 container mx-auto'>
    
    <div id="navBody" className='text-main-bg dark:text-white capitalize flex justify-between items-center'>
        <div id="navLogo" className='text-3xl'>
            <a href="" id='logo'>Portfolio</a>
        </div>
        
        <div id="navBlock">
            <ul id="navLinks" className='text-2xl hidden md:flex gap-12 justify-between items-center'>
                <li>
                    <a href="" className="navLink">about</a>
                </li>
                <li>
                    <a href="" className="navLink">experience</a>
                </li>
                <li>
                    <a href="" className="navLink">project</a>
                </li>
                <li>
                    <a href="" className="navLink">contact</a>
                </li>
            </ul>
            
            <div id="menuBar" className='relative flex flex-col md:hidden items-end justify-center '>
                <img src={getImageUrl("image16.png")} className="size-10" onClick={()=>setMenuTog(!menuTog)} />

                <ul id="menunavLinks" className={ 'text-2xl h-auto p-3 rounded-md bg-gradient-to-b from-secondary to-dark-blue' + 
                                    (menuTog ? " hidden" : ' flex') + ' flex-col justify-between items-start'}>
                    <li>
                        <a href="" className="navLink">about</a>
                    </li>
                    <li>
                        <a href="" className="navLink">experience</a>
                    </li>
                    <li>
                        <a href="" className="navLink">project</a>
                    </li>
                    <li>
                        <a href="" className="navLink">contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    
  </section></>)
}

export default Navbar;