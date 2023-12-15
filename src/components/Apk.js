import React from "react";
import { IMG_CDN_URL } from "../config";
import { Link } from "react-router-dom";
const Apk = ({ title, androidImage, IosImage, androidLink, IosLink }) => {
  return (
    <div className="bg-gray-100 py-10 mt-10 flex lg:justify-around justify-center items-center gap-16 flex-col lg:flex-row ">
      <div className="lg:text-3xl text-2xl font-bold lg:w-4/12 px-10 md:px-0  text-gray-600">
        {title}
      </div>
      <div className="flex gap-5">
        <Link to={androidLink}>
          <img src={`${IMG_CDN_URL}/${androidImage}`} className="w-40" />
        </Link>
        <Link to={IosLink}>
          <img src={`${IMG_CDN_URL}/${IosImage}`} className="w-40" />
        </Link>
      </div>
    </div>
  );
};

export default Apk;
