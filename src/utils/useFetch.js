import { useEffect, useState } from "react";
import { FETCH_URL_MENU } from "../config";

export const useFetch = (id, langitude, latitude) => {
  const [data, setData] = useState(null);

  const GetRestaurantDetails = async ({ lat, lang }) => {
    const data = await fetch(
      `${FETCH_URL_MENU}lat=${lat}&lng=${lang}${
        id ? `&restaurantId=${id}` : ""
      }`
    );
    const json = await data.json();
    setData(json?.data?.cards);
  };
  useEffect(() => {
    const err = [undefined, "undefined", "", false, null, "null"];
    if (!err.includes(latitude) && !err.includes(langitude)) {
      GetRestaurantDetails({ lat: latitude, lang: langitude });
    } else {
      GetRestaurantDetails({ lat: "26.263863", lang: "73.008957" });
    }
  }, []);

  return data;
};

export const useFetchRestaurant = ({ latitude, langitude, setIsFetch }) => {
  const [data, setData] = useState([]);
  const GetResturants = async ({ lat, lng }) => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );
    const json = await data?.json();
    setData(json?.data?.cards);
    setIsFetch(false);
  };

  useEffect(() => {
    const err = [undefined, "undefined", "", false, null, "null"];
    if (!err.includes(latitude) && !err.includes(langitude)) {
      GetResturants({ lat: latitude, lng: langitude });
    } else if (latitude == undefined && langitude == undefined) {
      GetResturants({ lat: "26.263863", lng: "73.008957" });
    }
  }, [latitude, langitude]);

  return data;
};

export const useOnlineStatus = () => {
  const [status, setStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setStatus(false);
    });
    window.addEventListener("online", () => {
      setStatus(true);
    });
  }, []);

  return status;
};

// useEffect(() => {
//   const err = [undefined, "undefined", "", false, null, "null"];
//   if (!err.includes(latitude) && !err.includes(langitude)) {
//     GetResturants({ lat: latitude, lng: langitude });
//   } else if (latitude == undefined && langitude == undefined) {
//     GetResturants({ lat: "26.263863", lng: "73.008957" });
//   }
// }, [latitude, langitude]);

// const GetResturants = async ({ lat, lng }) => {
//   const data = await fetch(
//     `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
//   );
//   const json = await data?.json();
//   setData(json?.data?.cards);
//   setCoursel(json?.data?.cards[1]?.card?.card);
//   setCourselBanner(json?.data?.cards[0]?.card?.card);
//   setRestaurantList(
//     json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//   );
//   setIsFetch(false);
// };
