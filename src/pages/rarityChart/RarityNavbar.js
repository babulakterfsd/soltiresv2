/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import scrollToElement from 'scroll-to-element';
import Logo from '../../assets/images/logov3.png';

function RarityNavbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [windowHeight, setWindowHeight] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollTo = (selector) => {
    scrollToElement(selector, { offset: 0, ease: 'linear', duration: 500 });
  };

  useEffect(() => {
    const handleScroll = () => {
      setWindowHeight(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div
      className={`${
        windowHeight ? 'fixed top-0' : 'absolute top-0 lg:top-10'
      }  w-full z-50`}
    >
      {/* <div className="lg:hidden text-center w-full bg-[#43a748] text-main-white py-1 text-md">
        Mega $25,000 giveway ongoing!{' '}
        <a
          href="https://twitter.com/SolTires_"
          target="_blank"
          rel="noreferrer"
          className="underline hover:text-orange"
        >
          Click
        </a>{' '}
        to join
      </div> */}
      <nav
        className={`bg-main-dark px-4 ${
          windowHeight ? 'py-4 md:py-3' : 'py-2 md:py-6'
        } sm:px-6 md:px-12 ${
          !windowHeight && 'lg:rounded-full max-w-[1200px] w-full'
        } mx-auto shadow-2xl`}
      >
        <div className="my-container flex flex-wrap justify-between items-center">
          <button type="button" onClick={() => navigate('/')} className="flex">
            <img className="h-9 md:h-12 xl:h-16" src={Logo} alt="SolLires" />
          </button>
          <div className="flex md:order-2">
            <button type="button" className="primary-btn mr-2">
              <a
                target="_blank"
                href="https://whitepaper.soltires.com/"
                rel="noreferrer"
              >
                Whitepaper
              </a>
            </button>
            <button
              onClick={toggleMenu}
              data-collapse-toggle="NavBarId"
              type="button"
              className="inline-flex items-center p-2 text-base md:text-xl text-main-white rounded-lg lg:hidden hover:bg-orange-light focus:outline-none focus:ring-2 focus:ring-main-white"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="hidden w-full lg:block md:w-auto" id="NavBarId">
            <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-8 md:mt-0 text-base md:text-xl  md:font-medium text-main-white">
              <li
                onClick={() => scrollTo('#about')}
                className="hover:text-orange"
              >
                <a
                  href="#about"
                  className="block py-2 pl-3 "
                  aria-current="page"
                >
                  About
                </a>
              </li>
              <li
                onClick={() => scrollTo('#works')}
                className="hover:text-orange"
              >
                <a href="#works" className="block py-2 pl-3 ">
                  How it works
                </a>
              </li>
              <li
                onClick={() => scrollTo('#cars')}
                className="hover:text-orange"
              >
                <a href="#cars" className="block py-2 pl-3 ">
                  Cars
                </a>
              </li>
              <li
                onClick={() => scrollTo('#road-map')}
                className="hover:text-orange"
              >
                <a href="#road-map" className="block py-2 pl-3 ">
                  Road Map
                </a>
              </li>
              <li
                onClick={() => scrollTo('#community')}
                className="hover:text-orange"
              >
                <a href="#community" className="block py-2 pl-3 ">
                  Social
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* mobile */}
        <div className="w-full md:w-auto block lg:hidden">
          <ul
            className={`${
              isOpen ? 'block' : 'hidden'
            } flex flex-col items-center mt-4 text-base sm:text-lg text-main-white`}
          >
            <li
              onClick={() => {
                scrollTo('#about');
                setIsOpen(false);
              }}
            >
              <a to="#about" className="block py-2 pl-3 " aria-current="page">
                About
              </a>
            </li>
            <li
              onClick={() => {
                scrollTo('#works');
                setIsOpen(false);
              }}
            >
              <a href="#works" className="block py-2 pl-3 ">
                How it works
              </a>
            </li>
            <li
              onClick={() => {
                scrollTo('#cars');
                setIsOpen(false);
              }}
            >
              <a href="#cars" className="block py-2 pl-3 ">
                Cars
              </a>
            </li>
            <li
              onClick={() => {
                scrollTo('#road-map');
                setIsOpen(false);
              }}
            >
              <a href="#road-map" className="block py-2 pl-3 ">
                Road Map
              </a>
            </li>
            <li
              onClick={() => {
                scrollTo('#community');
                setIsOpen(false);
              }}
            >
              <a href="#community" className="block py-2 pl-3 ">
                Social
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default RarityNavbar;
