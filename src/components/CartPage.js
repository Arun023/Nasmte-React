import React from "react";
import { useSelector, useDispatch } from "react-redux";
import FoodCart from "./FoodCart";
import { clearCart } from "../redux/slices/cartSlice";
import EmptyCart from "./../../assets/empty_cart.avif";
import { IMG_CDN_URL } from "../config";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { PlateFormFee, TotalPrice } from "../utils/utils";
const CartPage = () => {
  // const dispatch = useDispatch();
  const Cart = useSelector((state) => state.cart.items);
  const DeliveryFee = Cart[0]?.restaurant.info.feeDetails.totalFee / 100;
  const PlateFormFee = 5;
  const TotalItemPrice = TotalPrice();
  const GST = Math.round((0.8 / 100) * TotalItemPrice);
  const TotalAmount = DeliveryFee + PlateFormFee + TotalItemPrice + GST;

  if (Cart.length === 0)
    return (
      <div className="pt-16 mx-auto w-6/12 flex flex-col items-center gap-3">
        <img src={EmptyCart} alt="empty_cart" />
        <span className="text-xl font-semibold">Your cart is empty</span>
        <span className="text-gray-400">
          You can go to home page to view more restaurants
        </span>
      </div>
    );
  return (
    <div className="min-h-screen pt-16 bg-gray-200 ">
      <div className="w-11/12 flex gap-5 ">
        <div className="w-8/12">
          <div className="w-full h-20"></div>
          <div className="w-full h-20"></div>
          <div className="w-full h-20"></div>
        </div>
        <div className="w-full md:w-4/12 px-8 py-4 bg-white mb-10">
          <div className="flex flex-wrap sm:flex-nowrap gap-5 ">
            <img
              width={100}
              height={100}
              className="object-contain"
              src={`${IMG_CDN_URL}/${Cart[0]?.restaurant.info.cloudinaryImageId}`}
            />
            <div className="pb-4 ">
              <div className="text-xl font-bold">
                {Cart[0]?.restaurant.info.name}
              </div>
              <span
                style={{ borderBottomWidth: "3px" }}
                className=" border-gray-700 pb-3">
                {Cart[0]?.restaurant.info.locality}
              </span>
            </div>
          </div>
          <div className="">
            {Cart?.map((data) => {
              return (
                <FoodCart
                  key={data.id}
                  restaurant={data.restaurant}
                  count={data.count}
                  {...data}
                />
              );
            })}
          </div>
          <div className="mt-5 font-medium text-lg">Bill Details</div>
          <div className="flex flex-col gap-5 text-gray-600 mt-4">
            <div className="flex justify-between">
              <div>Item Total</div>
              <div className="flex items-center">
                <MdOutlineCurrencyRupee /> {TotalItemPrice}
              </div>
            </div>
            <div className="flex justify-between border-b-2 border-gray-200 pb-6">
              <div>
                Delivery Fee |{" "}
                {Cart[0]?.restaurant.info.sla.lastMileTravelString}
              </div>
              <div className="flex items-center">
                <MdOutlineCurrencyRupee /> {DeliveryFee}
              </div>
            </div>
            <div className="flex justify-between">
              <div>Platform Fee</div>
              <div className="flex items-center">
                <MdOutlineCurrencyRupee /> {PlateFormFee}
              </div>
            </div>
            <div className="flex justify-between border-b-2 border-gray-800 pb-6">
              <div>GST and Restaurant Charges</div>
              <div className="flex items-center">
                <MdOutlineCurrencyRupee /> {GST}
              </div>
            </div>
            <div className="text-black flex justify-between text-lg font-bold pb-5">
              <div className="">TO PAY</div>
              <div className="flex items-center">
                <MdOutlineCurrencyRupee /> {TotalAmount}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
