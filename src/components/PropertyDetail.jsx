import React, { useState } from 'react';
import Bed from '../assets/bed.svg';
import Bath from '../assets/bath.svg';
import Fur from '../assets/bed-double.svg';
import Area from '../assets/expand.svg';
import { FiCheckCircle } from 'react-icons/fi';

import Bus from '../assets/Bus.svg';
import Gym from '../assets/Gym.svg';
import Park from '../assets/Group 11653.svg';
import School from '../assets/Group 11654.svg';
import Hospital from '../assets/Vector.svg';

const PropertyDetail = () => {
  const [overFocus, setOverFocus] = useState(true);
  const [detFocus, setDetFocus] = useState(false);
  const [featFocus, setFeatFocus] = useState(false);
  const [nearFocus, setNearFocus] = useState(false);
  return (
    <div className='mt-8'>
      <div className='flex space-x-3 md:space-x-4 lg:space-x-8 justify-center'>
        <button
          className={`${
            overFocus
              ? 'underline text-iris underline-offset-8'
              : 'no-underline'
          } text-sm md:text-md lg:text-base font-medium `}
          onClick={() => {
            if (!overFocus) {
              setFeatFocus(false);
              setDetFocus(false);
              setNearFocus(false);
              setOverFocus(!overFocus);
            }
          }}
        >
          Overview
        </button>
        <button
          className={`${
            detFocus
              ? 'underline text-iris underline-offset-8'
              : 'no-underline'
          } text-sm md:text-md lg:text-base font-medium `}
          onClick={() => {
            if (!detFocus) {
              setFeatFocus(false);
              setDetFocus(!detFocus);
              setNearFocus(false);
              setOverFocus(false);
            }
          }}
        >
          Details
        </button>
        <button
          className={`${
            featFocus
              ? 'underline text-iris underline-offset-8'
              : 'no-underline'
          } text-sm md:text-md lg:text-base font-medium `}
          onClick={() => {
            if (!featFocus) {
              setFeatFocus(!featFocus);
              setDetFocus(false);
              setNearFocus(false);
              setOverFocus(false);
            }
          }}
        >
          Features & Amenities
        </button>
        <button
          className={`${
            nearFocus
              ? 'underline text-iris underline-offset-8'
              : 'no-underline'
          } text-sm md:text-md lg:text-base font-medium `}
          onClick={() => {
            if (!nearFocus) {
              setFeatFocus(false);
              setDetFocus(false);
              setNearFocus(!nearFocus);
              setOverFocus(false);
            }
          }}
        >
          Nearby{' '}
        </button>
      </div>
      <div
        id='overview'
        className={` ${overFocus ? 'block' : 'hidden'}`}
      >
        <h2 className='text-md md:text-lg lg:text-xl font-semibold my-4 text-dark '>
          Overview
        </h2>
        <p className=' text-[0.8rem] md:text-[0.9rem] text-start leading-snug lg:w-3/4  '>
          Property taxes are charged by local government entities,
          such as KMC, and are due by the owner of the property. The
          amount of KMC property tax that must be paid may vary. Thus,
          it depends on the location and a number of other criteria.
          KMC approved the new Unit Area Assessment (UAA) mechanism
          for calculating property taxes in March 2017.
        </p>
      </div>
      <div
        id='detail'
        className={` ${detFocus ? 'block' : 'hidden'}`}
      >
        <h2 className='text-md md:text-lg lg:text-xl font-semibold my-4 text-dark '>
          Details
        </h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-x-2 items-center'>
          <div className='border-iris rounded-2xl px-6 h-32 md:h-full border-[1.38px] py-4 md:py-6 lg:py-8 '>
            <img
              src={Bed}
              alt=''
              className='h-6 w-6 md:h-8 md:w-8 font-semibold '
            />
            <p className='text-sm md:text-[0.68rem] lg:text-lg font-semibold leading-tight text-dark -mb-1'>
              BHK
            </p>
            <span className='text-xs md:text-[0.65rem] lg:text-[0.87rem]'>
              3 BHK
            </span>
          </div>
          <div className='border-iris rounded-2xl px-6 h-32 md:h-full border-[1.38px] py-4 md:py-6 lg:py-8 '>
            <img
              src={Bath}
              alt=''
              className='h-6 w-6 md:h-8 md:w-8 font-semibold '
            />
            <p className='text-sm md:text-[0.68rem] lg:text-lg font-semibold leading-tight text-dark -mb-1'>
              Bathroom
            </p>
            <span className='text-xs md:text-[0.65rem] lg:text-[0.87rem]'>
              2
            </span>
          </div>
          <div className='border-iris rounded-2xl px-6 h-32 md:h-full border-[1.38px] py-4 md:py-6 lg:py-8 '>
            <img
              src={Fur}
              alt=''
              className='h-6 w-6 md:h-8 md:w-8 font-semibold '
            />
            <p className='text-[0.7rem] md:text-[0.65rem] lg:text-lg font-semibold leading-tight text-dark -mb-1'>
              Furnishing Status
            </p>
            <span className='text-[0.6rem] md:text-[0.61rem] lg:text-[0.87rem]'>
              Semi-Furnished
            </span>
          </div>
          <div className='border-iris rounded-2xl px-6 h-32 md:h-full border-[1.38px] py-4 md:py-6 lg:py-8 '>
            <img
              src={Area}
              alt=''
              className='h-6 w-6 md:h-8 md:w-8 font-semibold '
            />
            <p className='text-[0.73rem] md:text-[0.68rem] lg:text-lg font-semibold leading-tight text-dark -mb-1'>
              Super Build Area
            </p>
            <span className='text-xs md:text-[0.65rem] lg:text-[0.87rem]'>
              1418 Sq.ft.
            </span>
          </div>
        </div>
      </div>
      <div
        id='amenities'
        className={` ${featFocus ? 'block' : 'hidden'}`}
      >
        <h2 className='text-md md:text-lg lg:text-xl font-semibold my-4 text-dark '>
          Features & Amenities
        </h2>
        <div className='flex space-x-4 ml-4 '>
          <div className='flex items-center text-[0.78rem] md:text-[0.87rem] lg:text-base  '>
            <FiCheckCircle className='mr-3 text-iris ' /> CCTV
          </div>
          <div className='flex items-center text-[0.78rem] md:text-[0.87rem] lg:text-base  '>
            <FiCheckCircle className='mr-3 text-iris ' /> Security
          </div>
          <div className='flex items-center text-[0.78rem] md:text-[0.87rem] lg:text-base  '>
            <FiCheckCircle className='mr-3 text-iris ' /> Life
          </div>
        </div>
      </div>
      <div
        id='nearby'
        className={` ${nearFocus ? 'visible' : 'hidden'}`}
      >
        <h2 className='text-md md:text-lg lg:text-xl font-semibold my-4 text-dark '>
          Nearby
        </h2>
        <div className='grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-x-8 justify-center place-content-center items-center text-white'>
          <div className='flex flex-col px-1 md:px-2 lg:px-3 py-2 bg-box rounded-xl md:min-w-[5.4rem] '>
            <img
              src={Bus}
              alt=''
              className='w-6 h-8 sm:w-8 sm:h-10 md:w-10 md:h-12 lg:w-12 lg:h-16 mx-auto'
            />
            <p className='mx-auto text-center text-xs md:text-sm'>
              {' '}
              Bus
            </p>
          </div>
          <div className='flex flex-col px-1 md:px-2 lg:px-3 py-2 bg-box rounded-xl md:min-w-[5.4rem] '>
            <img
              src={Park}
              alt=''
              className='w-6 h-8 sm:w-8 sm:h-10 md:w-10 md:h-12 lg:w-12 lg:h-16 mx-auto'
            />
            <p className='mx-auto text-center text-xs md:text-sm'>
              {' '}
              Park
            </p>
          </div>
          <div className='flex flex-col px-1 md:px-2 lg:px-3 py-2 bg-box rounded-xl md:min-w-[5.4rem] '>
            <img
              src={School}
              alt=''
              className='w-6 h-8 sm:w-8 sm:h-10 md:w-10 md:h-12 lg:w-12 lg:h-16 mx-auto'
            />
            <p className='mx-auto text-center text-xs md:text-sm'>
              {' '}
              School
            </p>
          </div>
          <div className='flex flex-col px-1 md:px-2 lg:px-3 py-2 bg-box rounded-xl md:min-w-[5.4rem] '>
            <img
              src={Hospital}
              alt=''
              className='w-6 h-8 sm:w-8 sm:h-10 md:w-10 md:h-12 lg:w-12 lg:h-16 mx-auto'
            />
            <p className='mx-auto text-center text-xs md:text-sm'>
              {' '}
              Hospital
            </p>
          </div>
          <div className='flex flex-col px-1 md:px-2 lg:px-3 py-2 bg-box rounded-xl md:min-w-[5.4rem] '>
            <img
              src={Gym}
              alt=''
              className='w-6 h-8 sm:w-8 sm:h-10 md:w-10 md:h-12 lg:w-12 lg:h-16 mx-auto'
            />
            <p className='mx-auto text-center text-xs md:text-sm'>
              {' '}
              Gym
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
