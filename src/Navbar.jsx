// src/components/Navbar.js
import React,{useState} from 'react';
import { IoMdMenu } from "react-icons/io";
import { Link } from 'react-scroll';
const Navbar = () => {

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='text-white fixed w-full z-20'>
        <div className="bg-slate-800 text-white p-4 flex justify-between items-center w-full">
      <div className="flex-1 items-center">
        <div className="flex-shrink-0">
          <img
            className="block"
            src="https://projectsdeal.co.uk/images/logo.png"
            alt="Logo"
          />
        </div>
        
      </div>
        

     <div onClick={handleClick} className='md:hidden z-10'>
         <IoMdMenu/>
      </div>

      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-16 left-0 w-full bg-[#d69f0f] flex flex-col justify-start items-start  text-black'
        }
      >
        <li className='text-xl  w-full hover:bg-[#FFBF17]'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='text-xl w-full hover:bg-[#FFBF17]'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='text-xl w-full hover:bg-[#FFBF17]'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='text-xl w-full hover:bg-[#FFBF17]'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className=' text-xl w-full hover:bg-[#FFBF17]'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>


      <div className="hidden flex-1 
      lg:block 
      ">
        
        <div className='flex justify-between  items-center'>
        <p className="text-[18px]">No. 1 Dissertation Writing Services in UK,
          <span className="text-orange-400 text-[16px]"><i>Since 2001!</i></span>
          </p>
        
        <button className="bg-blue-500 text-white px-4 py-2 rounded ">
        Call +44 20 32900046
        </button>
      
        </div>
      </div>

    </div>


    <div className=" hidden md:block flex mt-0 bg-[#d69f0f] text-[20px]  flex-row text-black">
        <div className="flex p-0 flex-wrap font-thin items-center">
          <a href="#" className="p-3 hover:bg-[#FFBF17]">
            Home
          </a>
          <a href="#" className="p-3 hover:bg-[#FFBF17]">
            Blog
          </a>
          <a href="#" className="p-3 hover:bg-[#FFBF17] ">
            MyProfile
          </a>
          <a href="#" className="p-3 hover:bg-[#FFBF17]">
            Home
          </a>
         
         
          <a href="#" className="p-3 hover:bg-[#FFBF17]">
            Home
          </a>
          <a href="#" className="p-3 hover:bg-[#FFBF17]">
            Blog
          </a>
          <a href="#" className="p-3 hover:bg-[#FFBF17] ">
            MyProfile
          </a>
          <a href="#" className="p-3 hover:bg-[#FFBF17]">
            Home
          </a>
          <a href="#" className="p-3 hover:bg-[#FFBF17]">
            Home
          </a>
          <a href="#" className="p-3 hover:bg-[#FFBF17]">
            Blog
          </a>
          <a href="#" className="p-3 hover:bg-[#FFBF17] ">
            MyProfile
          </a>
          <a href="#" className="p-3 hover:bg-[#FFBF17]">
            Home
          </a>
          <a href="#" className="p-3 hover:bg-[#FFBF17]">
            Home
          </a>
          <a href="#" className="p-3 hover:bg-[#FFBF17]">
            Blog
          </a>
          <a href="#" className="p-3 hover:bg-[#FFBF17] ">
            MyProfile
          </a>
          <a href="#" className="p-3 hover:bg-[#FFBF17]">
            Home
          </a>
          <a href="#" className="p-3 hover:bg-[#FFBF17]">
            Home
          </a>
          <a href="#" className="p-3 hover:bg-[#FFBF17]">
            Blog
          </a>
          
        </div>
      </div>

    </div>
    
  );
};

export default Navbar;
