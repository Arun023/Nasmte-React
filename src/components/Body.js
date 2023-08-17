import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { CardDetails } from "../config";
import Shimmer from "./Shimmer";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [RestaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [isFetch, setIsFetch] = useState(true);

  useEffect(() => {
    GetResturants();
  }, []);

  const FilterData = (search, List) =>
    (Result = List.filter((res) =>
      res.info.name.toLowerCase().includes(search.toLowerCase())
    ));

  const GetResturants = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.258913&lng=72.974479&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
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

  if (!RestaurantList) return <h2>No Data Avaiable</h2>;

  return (
    <>
      <div className="search__functionality">
        <input
          type="text"
          className="search__input"
          placeholder="Search For Restaurant"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search__btn"
          onClick={() => {
            const FilteredData = FilterData(searchText, RestaurantList);
            setFilteredRestaurantList(FilteredData);
          }}>
          Search
        </button>
      </div>
      {RestaurantList?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="card__body">
          {filteredRestaurantList?.map((res) => {
            return <RestaurantCard data={{ ...res.info }} key={res.info.id} />;
          })}
          {filteredRestaurantList?.length === 0 && <h2>No Restaurant Found</h2>}
        </div>
      )}
    </>
  );
};
export default Body;
