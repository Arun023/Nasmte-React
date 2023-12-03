import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { CardDetails } from "../config";
import Shimmer from "./Shimmer";
const Body = () => {
  const [RestaurantList, setRestaurantList] = useState([]);
  const [isFetch, setIsFetch] = useState(true);
  const [title, setTitle] = useState("");

  useEffect(() => {
    GetResturants();
  }, []);

  const GetResturants = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data?.json();
    console.log(json?.data?.cards[0]?.card?.card);
    setTitle(json?.data?.cards[1]?.card?.card?.header);
    setRestaurantList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setIsFetch(false);
  };

  if (!RestaurantList) return <h2>No Data Avaiable</h2>;

  return (
    <>
      <div className="mt-5 text-2xl text-center mb-5">{title.title}</div>
      {RestaurantList?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="flex flex-wrap items-center justify-center gap-10">
          {RestaurantList?.map((res) => {
            return <RestaurantCard data={{ ...res.info }} key={res.info.id} />;
          })}
          {RestaurantList?.length === 0 && <h2>No Restaurant Found</h2>}
        </div>
      )}
    </>
  );
};
export default Body;
