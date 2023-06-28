import React, { useState, useEffect } from "react";
import { Carousel } from "flowbite";
import type { CarouselItem, CarouselOptions, CarouselInterface } from "flowbite";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

export default function Carousels() {
  const slides = [

    {
      url: '/pc.png',
    },
    {
      url: '/1.jpeg',
    },
    {
      url: '/2.jpg',
    },
    {
      url: '/3.jpg'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    // Auto slide effect
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Change the interval duration as desired (e.g., 3000ms = 3 seconds)

    return () => {
      // Clean up the interval on component unmount
      clearInterval(interval);
    };
  }, [currentIndex]); // Add currentIndex as a dependency to re-run the effect when it changes

  return (
    <div className='w-full h-[580px] m-auto relative group'>
      <div
      
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full bg-center object-contain bg-cover duration-500'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex justify-center mt-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer ${slideIndex === currentIndex ? "text-red-500" : "text-gray-500"
              }`}
            style={{
              margin: "0 5px",
              width: "15px",
              height: "15px",
              borderRadius: "50%",
              backgroundColor: slideIndex === currentIndex ? "red" : "white",
              transition: "background-color 0.3s ease",
              bottom: 50,
              position: "relative"
            }}
          ></div>
        ))}

      </div>

    </div>
  );
}
