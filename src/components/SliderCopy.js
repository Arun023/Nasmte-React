import React, { useRef, useState, useEffect } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import RestaurantCard, { isNewlyOpen } from "./RestaurantCard";
const ResturantSlider = ({ slider, style }) => {
  const slidesContainerRef = useRef(null);
  const slideRef = useRef(null);
  const [slideWidths, setSlideWidth] = useState(0);
  const NewlyOpenRestaurant = isNewlyOpen(RestaurantCard);
  const itemsPerClick = 3.5;
  const minItemsToShow = 6;
  const itemWidth = 200;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    if (slidesContainerRef.current) {
      slidesContainerRef.current.scrollLeft += slideWidths + 300;
    }
  };
  const handlePrevClick = () => {
    if (slidesContainerRef.current) {
      slidesContainerRef.current.scrollLeft -= slideWidths + 300;
    }
  };

  useEffect(() => {
    const updateSlideWidth = () => {
      if (slideRef.current) {
        setSlideWidth(slideRef.current.clientWidth);
      }
    };
    updateSlideWidth();
    window.addEventListener("resize", updateSlideWidth);
    return () => {
      window.removeEventListener("resize", updateSlideWidth);
    };
  });
  console.log(slideWidths);
  return (
    <>
      <div className="flex items-end justify-end gap-4">
        <div className="bg-gray-300 rounded-full py-3 px-3">
          <SlArrowLeft
            onClick={handlePrevClick}
            size={20}
            className={`cursor-pointer`}
          />
        </div>
        <div className="bg-gray-300 rounded-full py-3 px-3 ">
          <SlArrowRight
            onClick={handleNextClick}
            size={20}
            className="cursor-pointer "
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-start mb-10 mt-4 relative ">
        <div
          ref={slidesContainerRef}
          className="slides-container flex overflow-hidden space-x-2 rounded scroll-smooth w-full">
          {slider?.map((data, index) => {
            return data.info?.veg ? (
              <div
                key={data.info.id}
                ref={slideRef}
                className={`w-96 object-cover slide flex-shrink-0 snap-center rounded overflow-hidden `}>
                <NewlyOpenRestaurant data={{ ...data.info }} />
              </div>
            ) : (
              <div
                key={data.info.id}
                ref={slideRef}
                className={`w-96 object-cover slide flex-shrink-0 snap-center rounded overflow-hidden `}>
                <RestaurantCard data={{ ...data.info }} key={data.info.id} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ResturantSlider;


import React, { useRef, useState, useEffect } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import RestaurantCard, { isNewlyOpen } from "./RestaurantCard";
const ResturantSlider = ({ slider, style }) => {
  const NewlyOpenRestaurant = isNewlyOpen(RestaurantCard);
  const itemsPerClick = 2;
  const minItemsToShow = 4;
  const itemWidth = 300;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const newIndex = (prev + itemsPerClick) % slider?.length;
      return newIndex;
    });
  };
  const handlePrev = () => {
    setCurrentIndex((prev) => {
      const newIndex = (prev - itemsPerClick + slider?.length) % slider?.length;
      return newIndex;
    });
  };

  return (
    <>
      <div className="flex items-end justify-end gap-4">
        <button
          className={`bg-gray-300 rounded-full py-3 px-3 ${
            currentIndex === 0 ? "pointer-events-none opacity-50" : ""
          }`}
          onClick={handlePrev}
          disabled={currentIndex === 0}>
          <SlArrowLeft />
        </button>

        <button
          className={`bg-gray-300 rounded-full py-3 px-3 ${
            currentIndex + itemsPerClick >= slider?.length ||
            currentIndex + minItemsToShow >= slider?.length
              ? "pointer-events-none opacity-50"
              : ""
          }`}
          onClick={handleNext}
          disabled={
            currentIndex + itemsPerClick >= slider?.length ||
            currentIndex + minItemsToShow >= slider?.length
          }>
          <SlArrowRight />
        </button>
      </div>
      <div className="flex overflow-hidden flex-col justify-center items-start mb-10 mt-4 relative ">
        <div
          style={{
            width: `${slider?.length * itemWidth}px`,
            transform: `translateX(-${currentIndex * itemWidth}px)`,
          }}
          className="flex gap-5 transition-transform duration-500 ease-in-out overflow-hidden">
          {slider?.map((data, index) => {
            return data.info?.veg ? (
              <div
                key={data.info.id}
                className={`w-96 object-cover slide flex-shrink-0 snap-center rounded overflow-hidden `}>
                <NewlyOpenRestaurant data={{ ...data.info }} />
              </div>
            ) : (
              <div
                key={data.info.id}
                className={`w-96 object-cover slide flex-shrink-0 snap-center rounded overflow-hidden `}>
                <RestaurantCard data={{ ...data.info }} key={data.info.id} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ResturantSlider;


import React, { useRef, useState, useEffect } from "react";
import { IMG_CDN_URL } from "../config";
import { Link } from "react-router-dom";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
const Slider = ({ slider, style }) => {
  const itemsPerClick = 3.5;
  const minItemsToShow = 6;
  const itemWidth = 200;
  const [currentIndex, setCurrentIndex] = useState(0);

  const PrevClick = () => {
    setCurrentIndex((prev) => {
      const newIndex = (prev - itemsPerClick + slider?.length) % slider?.length;
      return newIndex;
    });
  };

  const NextClick = () => {
    setCurrentIndex((prev) => {
      const newIndex = (prev + itemsPerClick) % slider?.length;
      return newIndex;
    });
  };

  return (
    <>
      <div className="flex items-end justify-end gap-4">
        <button
          className={`bg-gray-300 rounded-full py-3 px-3 ${
            currentIndex === 0 ? "pointer-events-none opacity-50" : ""
          }`}
          onClick={PrevClick}
          disabled={currentIndex === 0}>
          <SlArrowLeft />
        </button>

        <button
          className={`bg-gray-300 rounded-full py-3 px-3 ${
            currentIndex + itemsPerClick >= slider?.length ||
            currentIndex + minItemsToShow >= slider?.length
              ? "pointer-events-none opacity-50"
              : ""
          }`}
          onClick={NextClick}
          disabled={
            currentIndex + itemsPerClick >= slider?.length ||
            currentIndex + minItemsToShow >= slider?.length
          }>
          <SlArrowRight />
        </button>

        {/* <div className="bg-gray-300 rounded-full py-3 px-3">
          <SlArrowLeft
            onClick={handlePrevClick}
            size={20}
            className="cursor-pointer"
          />
        </div>
        <div className="bg-gray-300 rounded-full py-3 px-3">
          <SlArrowRight
            onClick={handleNextClick}
            size={20}
            className="cursor-pointer"
          />
        </div> */}
      </div>
      <div className="overflow-hidden flex flex-col justify-center items-start mb-10 mt-4 relative ">
        <div
          style={{
            width: `${slider?.length * itemWidth}px`,
            transform: `translateX(-${currentIndex * itemWidth}px)`,
          }}
          className="flex transition-transform duration-500 ease-in-out overflow-hidden">
          {slider?.map((data) => {
            return (
              <>
                <img
                  className={`${style} object-cover`}
                  src={`${IMG_CDN_URL}/${data.imageId}`}
                  alt="mountain_image"
                />
                {/* <Link
                  target="__blank"
                  to={data?.action?.link}
                  ref={slideRef}
                  className={`slide flex-shrink-0 snap-center rounded overflow-hidden `}></Link> */}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Slider;
