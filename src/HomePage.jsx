// src/components/HomePage.js
import React from 'react';
import Navbar from './Navbar';
import { MdOutlineCalculate } from "react-icons/md";

const HomePage = () => {
  return (
    
    
     <div className='w-full h-[100%] flex-1 pt-24 px-6 pb-[0rem] relative'>
        <div className="flex flex-col pt-14 lg:flex-row">
        <div className="w-1/2 p-4 flex">
          <div className="flex-1 w-auto items-center mb-2">
            <img
              className="mr-2"
              src="https://projectsdeal.co.uk/images/coursework_writing_services.png"
              alt="Logo"
            />

           
          </div>
          
         <div className='flex-1 pt-20 hidden lg:block'>
         <img
            className="w-full object-cover rounded float-right mr-[-32px] h-[460px]"
            src="https://projectsdeal.co.uk/images/Student3.png"
            alt="Image"
          />
         </div>
         
        </div>

        <div className="w-full md:w-1/2 p-4 relative pt-4">
            <div className=''>
                <img src='https://projectsdeal.co.uk/images/projectsdeal_dissertation_writing_services_offer.png' className='absolute -top-[6px] left-[2px] w-[190px]' />

            </div>
        <form className="bg-[rgba(0,_0,_0,_0.7)] pt-[40px] sm:pr-[42px] pb-[20px] pl-[50px] mb-[40px] text-center p-6 rounded shadow">
            
        <img  src='https://projectsdeal.co.uk/img/features/index2.png' className='pb-[10px] mr-0 inline' alt='my' />
            <span className="text-2xl font-semibold  text-yellow-400">Calculate Pricing</span>
           
            <p className="text-sm mb-4 text-white">
              Just Select Correct Options and Calculate Best Price
            </p>

            <div className="relative top-0 left-0">
              
              <select
                className="mb-[10px] w-full h-[34px] px-[12px] py-[6px] bg-[#fff] border-[1px] border-[solid] border-[#ccc] rounded-[4px] [box-shadow:inset_0_1px_1px_rgba(0,0,0,.075)]  [transition:border-color_ease-in-out_.15s,box-shadow_ease-in-out_.15s]"
                name="option1"
              >
                <option>--please select Academic level--</option>
                <option>my2</option>
                <option>my3</option>
                <option>my4</option>
              </select>
              <select
                className="mb-[10px] w-full h-[34px] px-[12px] py-[6px] bg-[#fff] border-[1px] border-[solid] border-[#ccc] rounded-[4px] [box-shadow:inset_0_1px_1px_rgba(0,0,0,.075)]  [transition:border-color_ease-in-out_.15s,box-shadow_ease-in-out_.15s]"
                name="option1"
              >
                <option>--please select Domain--</option>
                <option>my2</option>
                <option>my3</option>
                <option>my4</option>
              </select>
              <select
                className="mb-[10px] w-full h-[34px] px-[12px] py-[6px] bg-[#fff] border-[1px] border-[solid] border-[#ccc] rounded-[4px] [box-shadow:inset_0_1px_1px_rgba(0,0,0,.075)]  [transition:border-color_ease-in-out_.15s,box-shadow_ease-in-out_.15s]"
                name="option1"
              >
                <option>--please select No. of Word --</option>
                <option>my2</option>
                <option>my3</option>
                <option>my4</option>
              </select>
              <select
                className="mb-[10px] w-full h-[34px] px-[12px] py-[6px] bg-[#fff] border-[1px] border-[solid] border-[#ccc] rounded-[4px] [box-shadow:inset_0_1px_1px_rgba(0,0,0,.075)]  [transition:border-color_ease-in-out_.15s,box-shadow_ease-in-out_.15s]"
                name="option1"
              >
                <option>--please select Tool--</option>
                <option>my2</option>
                <option>my3</option>
                <option>my4</option>
              </select>
              <select
                className="mb-[10px] w-full h-[34px] px-[12px] py-[6px] bg-[#fff] border-[1px] border-[solid] border-[#ccc] rounded-[4px] [box-shadow:inset_0_1px_1px_rgba(0,0,0,.075)]  [transition:border-color_ease-in-out_.15s,box-shadow_ease-in-out_.15s]"
                name="option1"
              >
                <option>--please select Academic level--</option>
                <option>my2</option>
                <option>my3</option>
                <option>my4</option>
              </select>
              <select
                className="mb-[10px] w-full h-[34px] px-[12px] py-[6px] bg-[#fff] border-[1px] border-[solid] border-[#ccc] rounded-[4px] [box-shadow:inset_0_1px_1px_rgba(0,0,0,.075)]  [transition:border-color_ease-in-out_.15s,box-shadow_ease-in-out_.15s]"
                name="option1"
              >
                <option>--please select Academic level--</option>
                <option>my2</option>
                <option>my3</option>
                <option>my4</option>
              </select>
            </div>
            {/* Repeat the above block for Option 2 to Option 5 */}
            <div className="mb-4">
             
              <input
                type="email"
                className="mt-1 p-2 block w-full rounded-md border-gray-300"
                name="email"
                placeholder='Email'
              />
            </div>
            <div className="mb-4">
            
              <input
                type="tel"
                className="mt-1 p-2 block w-full rounded-md border-gray-300"
                name="phone"
                placeholder='Contact'
              />
            </div>
            <div className="mb-4">
             
              <input
                type="date"
                className="mt-1 p-2 block w-full rounded-md border-gray-300"
                name="dob"
                placeholder='Deadline'
              />
            </div>
            <button
              className="m-auto bg-[#d69f0f] text-[#fff] font-bold h-[46px] w-[200px] flex items-center p-4 rounded"
              type="submit"
            >
              Click to Calculate
              <span className='ml-2'><MdOutlineCalculate/></span>
            </button>
            <p className='text-white text-[20px] mt-[10px]'>
            Result is all that Matters!
            </p>
          </form>
          
        </div>
      </div>
    </div>
  
    
   
  );
};

export default HomePage;
