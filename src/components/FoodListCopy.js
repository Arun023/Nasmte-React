import { MdOutlineCurrencyRupee } from "react-icons/md";
import { IoStar } from "react-icons/io5";
import { IMG_CDN_URL } from "./../config";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
const FoodList = ({ itemCards, restaurant }) => {
  const dispatch = useDispatch();
  const UpdateCart = (id) => {
    dispatch(addToCart({ item: id, restaurant: restaurant }));
  };
  const Cart = useSelector((state) => state.cart.items);

  const ExitingItem = Cart.find((ele) => ele);
  console.log(ExitingItem);

  return (
    <>
      {itemCards?.map((data) => {
        return (
          <div
            key={data.card.info.id}
            className="border-b-2 my-5 py-5 flex flex-col">
            <div className="  flex gap-4 justify-between items-center relative">
              <div className="w-9/12">
                <div className="flex items-center gap-2">
                  <div
                    className={`${
                      data.card.info.itemAttribute?.vegClassifier === "VEG"
                        ? "veg"
                        : "nonveg"
                    }`}></div>
                  <span className="flex justify-center items-center gap-1">
                    {data.card.info.isBestseller && (
                      <>
                        <IoStar color="#ee9c00" />
                        <span className="text-sm font-semibold text-[#ee9c00]">
                          Bestseller
                        </span>
                      </>
                    )}
                  </span>
                </div>
                <div className="text-lg font-semibold text-gray-600 mt-1">
                  {data.card.info.name}
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    <MdOutlineCurrencyRupee />
                    {data.card.info.price
                      ? data.card.info.price / 100
                      : data.card.info.defaultPrice / 100}
                  </div>
                  {data.card.info.offerTags && (
                    <span
                      className={`${
                        data.card.info.offerTags[0]?.backgroundColor &&
                        "bg-[#FAE8E3] text-[#DB6742] text-sm px-2"
                      } `}>
                      <span className="font-semibold">
                        {data.card.info.offerTags[0]?.title}
                      </span>{" "}
                      | {data.card.info.offerTags[0]?.subTitle}
                    </span>
                  )}
                </div>
                <p className="my-5 text-gray-400 text-sm">
                  {data.card.info.description}
                </p>
              </div>
              {data.card.info.imageId && (
                <div className="">
                  <img
                    src={`${IMG_CDN_URL}/${data.card.info.imageId}`}
                    className="w-36 h-24 object-cover rounded-xl"
                    alt=""
                  />
                </div>
              )}
            </div>
            <div className="flex items-center">
              <button
                className="text-center mx-auto border-2 bg-orange-400 border-gray-200 px-8 py-2 shadow-lg hover:shadow-xl hover:bg-orange-500  duration-200 text-white font-medium rounded-lg w-4/12 cursor-pointer"
                onClick={() => UpdateCart(data?.card?.info)}>
                -
              </button>
              {/* <span>{ExitingItem[0]?.count}</span> */}
              <button
                className="text-center mx-auto border-2 bg-orange-400 border-gray-200 px-8 py-2 shadow-lg hover:shadow-xl hover:bg-orange-500  duration-200 text-white font-medium rounded-lg w-4/12 cursor-pointer"
                onClick={() => UpdateCart(data?.card?.info)}>
                +
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FoodList;
