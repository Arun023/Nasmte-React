import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [menuData, setMenuData] = useState([]);
  const GetRestaurantDetails = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=" +
        id
    );
    const json = await data.json();
    console.log(json.data);
    setMenuData(
      json?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    );
    setData(json?.data?.cards?.[0]?.card?.card?.info);
  };
  useEffect(() => {
    GetRestaurantDetails();
  }, []);

  console.log(menuData);

  return menuData.length === 0 ? (
    <Shimmer />
  ) : (
    <div style={{ display: "flex", gap: "20px" }}>
      <div className="card">
        <h1>Restaurant ID : {id}</h1>
        <h2>McDonald</h2>
        <img src={`${IMG_CDN_URL}/${data.cloudinaryImageId}`} />
        <h3>{data.area}</h3>
        <h3>{data.city}</h3>
        <h3>{data.avgRating}</h3>
        <h3>{data.costForTwoMessage}</h3>
      </div>
      <div>
        <h2>Menu</h2>
        <ul>
          {menuData.map((data, id) => {
            if (data.card?.card?.title) {
              return <li key={id}>{data.card?.card?.title}</li>;
            } else return null;
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
