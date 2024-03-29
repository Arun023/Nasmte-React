import React, { useRef, useState, useEffect } from "react";
import { IMG_CDN_URL } from "../config";
import { Link } from "react-router-dom";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
const Slider = ({ slider, style }) => {
  const slidesContainerRef = useRef(null);
  const slideRef = useRef(null);
  const [slideWidths, setSlideWidth] = useState(0);

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

  return (
    <>
      <div className="flex items-end justify-end gap-4">
        <div className="bg-gray-300 rounded-full py-3 px-3">
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
        </div>
      </div>
      <div className="flex flex-col justify-center items-start mb-10 mt-4 relative ">
        <div
          ref={slidesContainerRef}
          className="slides-container flex overflow-hidden space-x-2 rounded scroll-smooth">
          {slider?.map((data, index) => {
            return (
              <Link
                target="__blank"
                to={data?.action?.link}
                ref={slideRef}
                className={`slide flex-shrink-0 snap-center rounded overflow-hidden `}>
                <img
                  className={`${style} object-cover`}
                  src={`${IMG_CDN_URL}/${data.imageId}`}
                  alt="mountain_image"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Slider;
