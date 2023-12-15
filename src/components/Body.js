import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
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
const Body = () => {
  const [RestaurantList, setRestaurantList] = useState([]);
  const [coursel, setCoursel] = useState([]);
  const [courselBanner, setCourselBanner] = useState([]);
  const [searchParams] = useSearchParams();
  const [isFetch, setIsFetch] = useState(true);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const GetResturants = async ({ lat, lng }) => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );
    // https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
    const json = await data?.json();
    console.log(json?.data);
    console.log(json?.data?.cards);
    setData(json?.data?.cards);
    setCoursel(json?.data?.cards[1]?.card?.card);
    setCourselBanner(json?.data?.cards[0]?.card?.card);
    setRestaurantList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setIsFetch(false);
  };
  const FetchLocation = (event) => {
    const data = JSON.parse(event.target.value);

    navigate({
      search: `?${createSearchParams({
        latitude: data.lat,
        langitude: data.lng,
      })}`,
    });
  };
  const latitude = searchParams.get("latitude");
  const langitude = searchParams.get("langitude");
  useEffect(() => {
    const err = [undefined, "undefined", "", false, null, "null"];
    if (!err.includes(latitude) && !err.includes(langitude)) {
      GetResturants({ lat: latitude, lng: langitude });
    } else if (latitude == undefined && langitude == undefined) {
      GetResturants({ lat: "26.263863", lng: "73.008957" });
    }
  }, [latitude, langitude]);

  // if (!RestaurantList) return <h2>No Data Avaiable</h2>;
  const apkData = data?.find(
    ({ card }) => card?.card?.id === "app_install_links"
  );
  const { title, iosAppImage, androidAppImage, androidAppLink, iosAppLink } =
    apkData?.card?.card || {};

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
        {data?.[2]?.card?.card?.header?.title}
      </div>
      {RestaurantList?.length === 0 || isFetch ? (
        <div className="flex items-center  justify-center">
          <Shimmer />
        </div>
      ) : (
        // <div className="flex flex-wrap items-center justify-center gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-10">
          {RestaurantList?.map((res) => {
            return <RestaurantCard data={{ ...res.info }} key={res.info.id} />;
          })}
          {/* <Sl ider slider={RestaurantList} style={`w-32 h-32`} /> */}
          {RestaurantList?.length === 0 && <h2>No Restaurant Found</h2>}
        </div>
      )}
      <div className="text-2xl font-bold mt-5 mb-5">
        {data?.[3]?.card?.card?.title}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-10">
        {data[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
          (res) => {
            return <RestaurantCard data={{ ...res.info }} key={res.info.id} />;
          }
        )}
        {/* <Sl ider slider={RestaurantList} style={`w-32 h-32`} /> */}
        {data[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
          ?.length === 0 && <h2>No Restaurant Found</h2>}
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
