 import React, { useState } from 'react'
 import { AiOutlineMenu } from "react-icons/ai";
import { FiMenu, FiX } from 'react-icons/fi';
 
 export default function Navbar() {
    
    const [isOpen , setIsOpen]=useState(false);
    function handleOpen(){
setIsOpen(!isOpen);
    }
    function handleClose (){
setIsOpen(isOpen);
    }
   return (
     <nav className='  flex container justify-between  mt-1.5  m-auto items-center'>
         <button className='text-2xl md:hidden' onClick={handleOpen}><FiMenu /> </button>
        
       {
         <div className={`fixed left-3 top-0 z-50 h-full w-64 md:hidden absolute overflow-hidden transition-transform duration-300 right-6 top-16 w-30 items-center      ${isOpen ?"translate-x-0": "-translate-x-full"}`}>
            
                 <button className='text-2xl md:hidden' onClick={handleClose }> </button>
             <div className='flex flex-col gap-6 shadow-xl'>
             <a href="">Home</a>
            <a href="">Technologies</a> 
            <a href="">Projects</a> 
            <a href="">About</a> 
            <a href="">Contact</a> 
              
            </div>
            </div>
        
        
       }
       
       
       <img src="/assets/logo-text.png" alt="" />
       <div className=' '>
         <ul className='hidden md:flex gap-6  ' >
            <li className='text-red-500'>Home<a href=""></a> </li>
            <li><a href="">Technologies</a> </li>
            <li><a href="">Projects</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
           
         </ul>
          
       </div>
       <div className='items-center '>
                 <button>Sign In</button>
                 <button className="btn btn-accent ml-3 rounded-3xl bg-pink-500 text-white">Sign Up</button>
       </div>

     </nav>
   )
 }
 