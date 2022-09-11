import React from 'react';
import { useEffect, useState } from 'react';
import { FaBars, FaAlignCenter } from 'react-icons/fa';
import { BiUserCircle } from 'react-icons/bi';

const Navbar = () => {
  let Links = [
    { name: 'Home', link: '/' },
    { name: 'List Your Property', link: '/' },
    { name: 'Blog', link: '/' },
  ];
  const [isScrolled, setIsScrolled] = useState(false);
  let [open, setOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav
      className={`${
        isScrolled && 'shadow-xl border-black rounded drop-shadow-lg '
      } shadow-none z-40 w-full  fixed top-0 items-center justify-around duration-700 transition-all ease-in justify-items-center`}
    >
      <div className='md:flex bg-white items-center justify-between py-4 md:py-2 md:px-10 px-7 border-b-[0.1rem] shadow-sm md:shadow-lg shadow-[#777]'>
        <a
          href='/'
          className='h-8 sm:h-10 cursor-pointer flex items-center
      text-gray-800 drop-shadow-2xl font-main font-semibold text-xl tracking-wide'
        >
          Propertybhavan
        </a>
        <div
          onClick={() => setOpen(!open)}
          className='text-lg absolute right-8 top-6 items-center cursor-pointer  md:hidden'
        >
          {!open ? (
            <FaBars name='open' />
          ) : (
            <FaAlignCenter name='menu' />
          )}
        </div>

        <ul
          className={`md:flex text-white md:text-black bg-iris md:items-center md:pb-0 pb-8 absolute md:static bg-light-blue md:bg-white md:bg-none md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? 'top-[2rem]' : 'top-[-490px]'
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className='md:ml-8 text-base font-medium md:my-0 my-7'
            >
              <a
                href={link.link}
                className='text-gray-800 hover:text-gray-400 duration-500'
              >
                {link.name}
              </a>
            </li>
          ))}
          <a
            href='#socials'
            className='mx-auto md:ml-4 px-2 py-1 md:px-2 font-base text-[#341F87] shadow-2xl'
          >
            <BiUserCircle className='h-6 w-6 text-white md:text-[#341F87]' />
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
