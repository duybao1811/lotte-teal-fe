'use client';
import React, { useState, useEffect } from 'react';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

const SPACE_DISPLAY = 300;

const ButtonGoTop = () => {
  const [isVisible, setIsVisible] = useState(
    typeof window !== 'undefined' ? window.scrollY > SPACE_DISPLAY : false,
  );

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > SPACE_DISPLAY) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div
      className={`w-14 h-14 rounded-full bg-primary fixed bottom-8 right-8 flex-col items-center justify-center cursor-pointer z-50 transition-opacity duration-300 ${isVisible ? 'opacity-100 flex' : 'opacity-0 hidden'}`}
      onClick={scrollToTop}
    >
      <HiOutlineChevronDoubleUp
        color={'white'}
        className={'opacity-60 absolute top-2 animate-bounce-up text-lg'}
      />
      <p className={'font-bold text-sm text-white mt-3'}>TOP</p>
    </div>
  );
};

export default ButtonGoTop;
