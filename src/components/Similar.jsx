import React from 'react';
import Prop from '../assets/prop.png';
import { IoLocationOutline } from 'react-icons/io5';

const Similar = () => {
  return (
    <div className='flex flex-col my-12 font-main'>
      <h3 className='font-semibold text-dark mb-1 md:mb-4 text-md md:text-lg lg:text-xl '>
        Similar Properties
      </h3>
      <div className='grid grid-col md:grid-cols-2 justify-center lg:grid-cols-3 gap-y-6 md:gap-6 lg:gap-x-2 mx-auto items-center'>
        <div className='flex flex-col px-3 md:px-4 pt-2 pb-6 bg-white text-black border-[0.002rem] shadow-lg  rounded-xl '>
          <div className='w-36 sm:w-40 md:w-52 lg:w-full mx-auto'>
            <img src={Prop} alt='property' className='rounded-xl' />
          </div>
          <div className='flex flex-col space-y-2 px-4'>
            <h5 className='py-2 -mb-2 text-[0.7rem] md:text-[0.8rem] lg:text-lg font-semibold '>
              2BHK Apartment for Sale
            </h5>
            <p className='flex space-x-3 text-[0.5rem] md:text-[0.75rem] lg:text-base md:space-x-6 lg:space-x-8 justify-between mb-8'>
              <span className='inline-flex items-center '>
                <IoLocationOutline className='h-3 w-3 md:h-4 md:w-4' />{' '}
                Behala
              </span>
              <span>&#8377; 15,000</span>
            </p>
            <div className='w-full h-[0.04rem] bg-black'></div>
            <button className='w-full text-white py-1 md:py-3 mx-auto bg-iris rounded-md text-[0.55rem] md:text-[0.6rem] lg:text-base shadow-md shadow-[#111]'>
              Contact Now
            </button>
            <button className=' w-full py-1 md:py-3 mx-auto bg-white border shadow-md text-[0.55rem] md:text-[0.6rem] lg:text-base shadow-[#b4b4b4] text-black rounded-md '>
              Learn More
            </button>
          </div>
        </div>
        <div className='flex flex-col px-3 md:px-4 pt-2 pb-6 bg-cardsec text-white border-[0.002rem] shadow-lg  rounded-xl '>
          <div className='w-36 sm:w-40 md:w-52 lg:w-full mx-auto'>
            <img src={Prop} alt='property' className='rounded-xl' />
          </div>
          <div className='flex flex-col space-y-2 px-4'>
            <h5 className='py-2 -mb-2 text-[0.7rem] md:text-[0.8rem] lg:text-lg font-semibold '>
              2BHK Apartment for Sale
            </h5>
            <p className='flex space-x-3 text-[0.5rem] md:text-[0.75rem] lg:text-base md:space-x-6 lg:space-x-8 justify-between mb-8'>
              <span className='inline-flex items-center '>
                <IoLocationOutline className='h-3 w-3 md:h-4 md:w-4' />{' '}
                Behala
              </span>
              <span>&#8377; 15,000</span>
            </p>
            <div className='w-full h-[0.04rem] bg-white mb-4 '></div>
            <button className='w-full text-white py-1 md:py-3 mx-auto bg-iris rounded-md text-[0.55rem] md:text-[0.6rem] lg:text-base shadow-md shadow-[#111]'>
              Contact Now
            </button>
            <button className=' w-full py-1 md:py-3 mx-auto bg-white border shadow-md text-[0.55rem] md:text-[0.6rem] lg:text-base shadow-[#b4b4b4] text-black rounded-md '>
              Learn More
            </button>
          </div>
        </div>
        <div className='flex md:mx-auto flex-col px-3 md:px-4 pt-2 pb-6 bg-card text-white border-[0.002rem] shadow-lg  rounded-xl '>
          <div className='w-36 sm:w-40 md:w-52 lg:w-full mx-auto'>
            <img src={Prop} alt='property' className='rounded-xl' />
          </div>
          <div className='flex flex-col space-y-2 px-4'>
            <h5 className='py-2 -mb-2 text-[0.7rem] md:text-[0.8rem] lg:text-lg font-semibold '>
              2BHK Apartment for Sale
            </h5>
            <p className='flex space-x-3 text-[0.5rem] md:text-[0.75rem] lg:text-base md:space-x-6 lg:space-x-8 justify-between mb-8'>
              <span className='inline-flex items-center '>
                <IoLocationOutline className='h-3 w-3 md:h-4 md:w-4' />{' '}
                Behala
              </span>
              <span>&#8377; 15,000</span>
            </p>
            <div className='w-full h-[0.04rem] bg-white'></div>
            <button className='w-full text-white py-1 md:py-3 mx-auto bg-iris rounded-md text-[0.55rem] md:text-[0.6rem] lg:text-base shadow-md shadow-[#111]'>
              Contact Now
            </button>
            <button className=' w-full py-1 md:py-3 mx-auto bg-white border shadow-md text-[0.55rem] md:text-[0.6rem] lg:text-base shadow-[#b4b4b4] text-black rounded-md '>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Similar;
