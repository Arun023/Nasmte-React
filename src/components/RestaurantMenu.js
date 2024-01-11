import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../config";
import { MdAccessTimeFilled } from "react-icons/md";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import { IoStar } from "react-icons/io5";
import { useFetch } from "../utils/useFetch";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
  const [currentIndex, setCurrentIndex] = useState("");
  const { id, latitude, langitude } = useParams();
  const restData = useFetch(id, latitude, langitude);
  const Data = restData?.[0]?.card?.card;
  const OfferData = restData?.[1]?.card?.card;
  const groupedCards = restData?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const categories = groupedCards?.filter(
    (ele) =>
      ele.card.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  console.log(categories);
  if (!Data) return <Shimmer />;
  return (
    <div className="max-w-4xl px-md-0 px-10 mx-auto my-20 flex flex-col gap-5">
      {Data !== undefined && (
        <>
          <div className="flex justify-between flex-wrap">
            <div>
              <div className="text-sm md:text-xl font-bold text-gray-700">
                {Data?.info?.name}
              </div>
              <div className="flex text-sm md:text-[15px] text-gray-500">
                {Data?.info?.cuisines?.join(", ")}
              </div>
              <div className="flex gap-2 text-sm md:text-[15px] text-gray-500">
                <div>{Data?.info?.areaName},</div>
                <div>{Data?.info?.sla.lastMileTravelString}</div>
              </div>
            </div>
            <div className="border border-gray-200 rounded-xl flex flex-col justify-between px-3 py-2">
              <div className="text-green-700 flex gap-1 items-center font-bold tracking-tighter">
                <IoStar size={18} /> {Data?.info?.avgRatingString}
              </div>
              <div className="text-xs border-gray-200 border-t pt-2 text-gray-500 font-bold tracking-tighter">
                {Data?.info?.totalRatingsString}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-7 border-t border-t-slate-300 border-dashed pt-5">
            <div className="text-gray-600 flex items-center gap-3 font-bold">
              <MdAccessTimeFilled size={26} />
              <span className="text-[17px] leading-4 ">
                {Data?.info?.sla?.slaString}
              </span>
            </div>
            <div className="text-gray-600 flex items-center gap-3 font-bold">
              <HiOutlineCurrencyRupee size={26} />
              <span className="text-[17px] leading-4 ">
                {Data?.info?.costForTwoMessage}
              </span>
            </div>
          </div>
        </>
      )}
      <div className="flex overflow-x-scroll gap-10 no-scrollbar scroll-smooth">
        {OfferData?.gridElements?.infoWithStyle?.offers?.map((data) => {
          return (
            <div className="flex border border-gray-200 p-2">
              {data?.info?.offerTag && (
                <p className="font-semibold border-r border-r-slate-200  py-2 px-3 inline text-[10px] write ">
                  {data?.info?.offerTag}
                </p>
              )}
              <div className="cursor-pointer rounded-lg px-2 py-1 w-60 leading-5">
                <div className="flex  tracking-tighter items-center gap-2">
                  <img
                    className="w-7 h-7"
                    src={`${IMG_CDN_URL}/${data?.info?.offerLogo}`}
                  />
                  <div className="font-bold text-gray-500">
                    {data?.info?.header}
                  </div>
                </div>
                <div className="flex gap-2 text-sm tracking-tighter font-bold text-gray-500 w-56">
                  <div className="">{data?.info?.couponCode}</div> |
                  <div>{data?.info?.description}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Category Accordian */}
      {categories?.map((ele) => {
        return (
          <RestaurantCategory
            {...ele?.card?.card}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            key={ele?.car?.card?.title}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
