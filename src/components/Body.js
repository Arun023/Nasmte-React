import { useEffect, useState } from "react";
import RestaurantCard, { isNewlyOpen } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import JsonList from "./../../in.json";
import {
  Link,
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import Slider from "./Slider";
import Apk from "./Apk";
import { useFetchRestaurant, useOnlineStatus } from "../utils/useFetch";
const Body = () => {
  const [isFetch, setIsFetch] = useState(true);
  const status = useOnlineStatus();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const latitude = searchParams.get("latitude");
  const langitude = searchParams.get("langitude");
  const restData = useFetchRestaurant({
    latitude,
    langitude,
    setIsFetch: setIsFetch,
  });
  const FetchLocation = (event) => {
    const data = JSON.parse(event.target.value);
    navigate({
      search: `?${createSearchParams({
        latitude: data.lat,
        langitude: data.lng,
      })}`,
    });
  };
  const NewlyOpenRestaurant = isNewlyOpen(RestaurantCard);
  const data = restData ? restData : [];
  const coursel = restData?.[1]?.card?.card;
  const courselBanner = restData?.[0]?.card?.card;
  const RestaurantChain =
    restData?.[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

  const RestaurantOnline =
    data[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  const apkData = data?.find(
    ({ card }) => card?.card?.id === "app_install_links"
  );
  const { title, iosAppImage, androidAppImage, androidAppLink, iosAppLink } =
    apkData?.card?.card || {};

  if (!RestaurantChain) return <Shimmer />;

  if (status === false)
    return <div className="text-2xl text-center my-40">💀 You Are OFFLINE</div>;

  return (
    <div className="md:mx-16">
      <div className="mt-5 text-center mb-5 flex flex-wrap items-center justify-center">
        <div className="text-2xl mx-16">{coursel?.header?.title}</div>
        <select
          className="lg:ml-52 mt-10 md:mt-0 border border-gray-400 rounded-2xl px-5 py-1 outline-none"
          onChange={(e) => FetchLocation(e)}>
          <option value="" className="text-md">
            ----- Select City -----
          </option>
          {JsonList.map((data, index) => (
            <option
              key={index}
              value={JSON.stringify({ lng: data.lng, lat: data.lat })}
              className="text-md">
              {data.city}
            </option>
          ))}
        </select>
      </div>
      {/* Slider */}

      <Slider
        slider={coursel?.gridElements?.infoWithStyle.info}
        style={`w-32 h-32`}
      />
      {/* Slider */}
      <Slider
        slider={courselBanner?.gridElements?.infoWithStyle.info}
        style={`w-full h-60`}
      />
      <div className="text-2xl font-bold mt-5 mb-5">
        {data?.[1]?.card?.card?.header?.title}
      </div>
      {RestaurantChain?.length === 0 || isFetch ? (
        <div className="flex items-center  justify-center">
          <Shimmer />
        </div>
      ) : (
        // <div className="flex flex-wrap items-center justify-center gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-10">
          {RestaurantChain?.map((res) => {
            return res.info?.veg ? (
              <NewlyOpenRestaurant data={{ ...res.info }} key={res.info.id} />
            ) : (
              <RestaurantCard data={{ ...res.info }} key={res.info.id} />
            );
          })}
          {/* <Sl ider slider={RestaurantChain} style={`w-32 h-32`} /> */}
          {RestaurantChain?.length === 0 && <h2>No Restaurant Found</h2>}
        </div>
      )}
      <div className="text-2xl font-bold mt-5 mb-5">
        {data?.[3]?.card?.card?.title}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-10">
        {RestaurantOnline?.map((res) => {
          return (
            <div key={res.info.id}>
              Hello
              <RestaurantCard data={{ ...res.info }} />
            </div>
          );
        })}
        {/* <Sl ider slider={RestaurantChain} style={`w-32 h-32`} /> */}
        {RestaurantOnline?.length === 0 && <h2>No Restaurant Found</h2>}
      </div>
      <Apk
        title={title}
        androidImage={androidAppImage}
        IosImage={iosAppImage}
        IosLink={iosAppLink}
        androidLink={androidAppLink}
      />
    </div>
  );
};
export default Body;
