import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import { FaSearch } from "react-icons/fa";
import { FilterData } from "../utils/utils";

const Search = () => {
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [RestaurantList, setRestaurantList] = useState([]);
  const [isFetch, setIsFetch] = useState(true);
  const [search, setSearch] = useState("");

  const GetResturants = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data?.json();
    console.log(json?.data);
    setRestaurantList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurantList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setIsFetch(false);
  };

  useEffect(() => {
    if (search !== "") {
      GetResturants();
    }
  }, [search]);
  return (
    <div className=" flex flex-col relative justify-center items-center mt-10 mx-10 md:mx-0">
      <input
        type="text"
        className="border border-gray-400 px-5 py-1  md:w-6/12 w-full h-12 outline-none mb-10"
        placeholder="Search For restaurant and food"
        onChange={(e) => {
          setSearch(e.target.value);
          const FilteredData = FilterData(e.target.value, RestaurantList);
          if (e.target.value === "") {
            console.log(e.target.value);
            setFilteredRestaurantList([]);
          }
          setFilteredRestaurantList(FilteredData);
        }}
      />
      {/* {filteredRestaurantList?.length === 0 ? (
        <Shimmer />
      ) : ( */}
      <div className="flex flex-wrap items-center justify-center gap-10">
        {filteredRestaurantList?.map((res) => {
          return <RestaurantCard data={{ ...res.info }} key={res.info.id} />;
        })}
        {filteredRestaurantList?.length === 0 && <h2>No Restaurant Found</h2>}
      </div>
      {/* )} */}
    </div>
  );
};

export default Search;
