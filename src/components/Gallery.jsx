import React from 'react';
import Home from '../assets/home.jpg';
import { BsUpload, BsHeart, BsWhatsapp } from 'react-icons/bs';
import { IoSwapHorizontal } from 'react-icons/io5';

const Gallery = () => {
  return (
    <div>
      <button className='bg-iris px-2 md:px-3 lg:px-4 py-1 rounded-md text-sm lg:text-md mb-3 font-medium text-white'>
        For rent
      </button>
      <h2 className='text-md md:text-lg lg:text-xl font-[650] mb-4'>
        2BHK Apartment For Sale in Newtown, Kolkata, West Bengal
      </h2>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 items-center'>
        <div className='col-span-2 row-span-2 '>
          <img
            src={Home}
            alt=''
            className='rounded-lg shadow-md shadow-[#696969] '
          />
        </div>
        <div>
          <img
            src={Home}
            alt=''
            className='rounded-md shadow-md shadow-[#696969] '
          />
        </div>
        <div>
          <img
            src={Home}
            alt=''
            className='rounded-md shadow-md shadow-[#696969] '
          />
        </div>
        <div>
          <img
            src={Home}
            alt=''
            className='rounded-md shadow-md shadow-[#696969] '
          />
        </div>
        <div>
          <img
            src={Home}
            alt=''
            className='rounded-md shadow-md shadow-[#696969] '
          />
        </div>
      </div>
      <div className='flex justify-end space-x-4 text-semibold mt-4 '>
        <button className='group py-1 px-1 md:px-2 lg:px-4 border border-iris rounded-md hover:bg-iris hover:text-white focus:bg-iris focus:text-white '>
          <BsUpload className='sm:h-4 sm:w-4 h-3 w-3 md:h-6 md:w-6  text-iris  group-focus:bg-iris group-focus:text-white group-hover:bg-iris group-hover:text-white' />
        </button>
        <button className='group py-1 px-1 md:px-2 lg:px-4 border border-iris rounded-md hover:bg-iris hover:text-white focus:bg-iris focus:text-white'>
          <BsHeart className='sm:h-4 sm:w-4 h-3 w-3 md:h-6 md:w-6  text-iris  group-focus:bg-iris group-focus:text-white group-hover:bg-iris group-hover:text-white' />
        </button>
        <button className='group py-1 px-1 md:px-2 lg:px-4 border border-iris rounded-md hover:bg-iris hover:text-white focus:bg-iris focus:text-white '>
          <IoSwapHorizontal className='sm:h-4 sm:w-4 h-3 w-3 md:h-6 md:w-6  text-iris  group-focus:bg-iris group-focus:text-white group-hover:bg-iris group-hover:text-white' />
        </button>
      </div>
      <h2 className='font-semibold text-dark text-xl'>
        &#8377; 25,000{' '}
      </h2>
      <div className='flex flex-col lg:flex-row sm:text-sm lg:text-md justify-between lg:items-center'>
        <p className='text-start text-sm md:text-md lg:text-base'>
          SP Sukhobrishti Ln, Action Area III, Newtown, Kolkata, West
          Bengal 700135, India
        </p>
        <div className='flex space-x-1'>
          <button className='bg-green sm:px-1 md:px-2 lg:px-3 py-1 sm:rounded-sm  lg:rounded-lg'>
            <BsWhatsapp className=' sm:h-4 sm:w-4 lg:h-5 lg:w-6 text-white' />
          </button>
          <button className='bg-iris md:py-1 w-36 md:w-40 lg:w-full lg:py-2 lg:px-8 font-medium rounded-xl text-xs md:text-md lg:text-lg text-white'>
            Contact Owner
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
