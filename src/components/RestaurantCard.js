import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Star from "./../../assets/star.svg";
const RestaurantCard = ({ data }) => {
  const {
    id,
    name,
    cuisines,
    avgRating,
    cloudinaryImageId,
    sla,
    areaName,
    aggregatedDiscountInfoV3,
  } = data;
  return (
    <Link
      to={`/restaurant/${id}`}
      className="flex flex-col relative hover:scale-90 duration-200">
      <img
        src={`${IMG_CDN_URL}/${cloudinaryImageId}`}
        className="w-80 h-52 object-cover rounded-2xl"
        alt=""
      />
      {aggregatedDiscountInfoV3 && (
        <div className=" text-white coupon__background px-3 flex justify-start text-xl font-bold items-center uppercase h-16 absolute bottom-24 rounded-b-2xl w-full">
          {`${aggregatedDiscountInfoV3?.header} ${
            aggregatedDiscountInfoV3.subHeader
              ? aggregatedDiscountInfoV3?.subHeader
              : ""
          }`}
        </div>
      )}
      <div className="font-semibold">{name}</div>
      <div className="flex gap-3 items-center font-semibold">
        <div className="flex gap-1.5">
          <img src={Star} className="w-6" />
          {avgRating}
        </div>
        <div className="flex gap-1">
          <span>•</span>
          {sla.slaString}
        </div>
      </div>
      <div className="font-light text-gray-700">
        {cuisines.slice(0, 4).join(", ")}
      </div>
      <div className="font-light text-gray-700">{areaName}</div>
    </Link>
  );
};

export default RestaurantCard;