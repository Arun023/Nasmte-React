import React, { useRef, useState, useEffect } from "react";
import { IMG_CDN_URL } from "../config";
import { Link } from "react-router-dom";

const Slider = ({ slider, style }) => {
  const slidesContainerRef = useRef(null);
  const slideRef = useRef(null);
  const [slideWidths, setSlideWidth] = useState(0);

  const handleNextClick = () => {
    console.log("NEXT");
    if (slidesContainerRef.current) {
      slidesContainerRef.current.scrollLeft += slideWidths;
    }
  };
  const handlePrevClick = () => {
    console.log("PREV");
    if (slidesContainerRef.current) {
      slidesContainerRef.current.scrollLeft -= slideWidths;
    }
  };

  useEffect(() => {
    const updateSlideWidth = () => {
      if (slideRef.current) {
        setSlideWidth(slideRef.current.clientWidth);
      }
    };

    // Initial setup
    updateSlideWidth();

    // Update slide width on window resize
    window.addEventListener("resize", updateSlideWidth);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateSlideWidth);
    };
  });

  return (
    <>
      <div className="flex items-end justify-end">
        <div className="">
          <button
            role="button"
            onClick={handlePrevClick}
            className="prev px-2 py-2 rounded-full bg-neutral-100 text-neutral-900 group"
            aria-label="prev">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5 group-active:-translate-x-2 transition-all duration-200 ease-linear">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
        </div>
        <div className="">
          <button
            role="button"
            onClick={handleNextClick}
            className="next px-2 py-2 rounded-full bg-neutral-100 text-neutral-900 group"
            aria-label="next">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5 group-active:translate-x-2 transition-all duration-200 ease-linear">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-start mb-10 relative ">
        <div
          ref={slidesContainerRef}
          className="slides-container flex overflow-hidden space-x-2 rounded scroll-smooth">
          {slider?.map((data) => {
            return (
              <Link
                target="__blank"
                to={data?.action?.link}
                ref={slideRef}
                className="slide flex-shrink-0 snap-center rounded overflow-hidden">
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
