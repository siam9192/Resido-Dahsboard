import React from 'react';
import { GoSearch } from "react-icons/go";
import { FaBell, FaMoon } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { MdMessage } from "react-icons/md";

const Navbar = () => {
    // https://griya.dexignzone.com/xhtml/index-2.html
    return (
        <div className='py-6 bg-color_main_light flex justify-between items-center px-5'>
         <div className='px-3 py-2 flex items-center gap-2 bg-color_main rounded-full'>
        <input className='w-[300px] py-1 border-none outline-none bg-transparent text-text_main' placeholder='Search..'></input>
       <div className='text-text_main'>
       <GoSearch></GoSearch>
       </div>
        </div>
        <div></div>
      
      <div className='flex items-center gap-8'>
      <div className='flex items-center gap-6'>
        <div className='p-3 bg-color_main rounded-md text-white relative'>
               <div className='text-4xl'>
               <FaMoon></FaMoon>
               </div>
              
                </div>
            <div className='p-3 bg-color_main rounded-md text-white relative'>
               <div className='text-4xl'>
               <FaBell></FaBell>
               </div>
               <div className='absolute -top-2 -right-1 w-6 h-6 text-center text-[14px] bg-color_primary rounded-full'>
               4
               </div>
                </div>
                <div className='p-3 bg-color_main rounded-md text-white relative'>
               <div className='text-4xl'>
              <IoMail></IoMail>
               </div>
               <div className='absolute -top-2 -right-1 w-6 h-6 text-center text-[14px] bg-color_success rounded-full'>
               4
               </div>
                </div>
                <div className='p-3 bg-color_main rounded-md text-white relative'>
               <div className='text-4xl'>
              <MdMessage></MdMessage>
               </div>
               <div className='absolute -top-2 -right-1 w-6 h-6 text-center text-[14px] bg-color_action_light rounded-full'>
               4
               </div>
                </div>
        </div>
        <div className='flex items-center gap-2'>
            <div className='space-y-1'>
                <h2 className='text-xl text-text_main
                 font-semibold text-end'>Roborto</h2>
                 <p className=' text-text_main text-[10px]'>ahsiam@gmail.com</p>
            </div>
        <div>
           <img src='https://griya.dexignzone.com/xhtml/images/profile/pic1.jpg' className='w-14 h-14 rounded-lg'/>
        </div>
            </div>
      </div>
        </div>
    );
}

export default Navbar;
