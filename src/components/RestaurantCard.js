import { IMG_CDN_URL } from "../config";
const RestaurantCard = ({ data }) => {
  const {
    name,
    locality,
    areaName,
    cuisines,
    avgRating,
    cloudinaryImageId,
    costForTwo,
  } = data;
  return (
    <div className="card">
      <img src={`${IMG_CDN_URL}/${cloudinaryImageId}`} alt="" />
      <h2>{name}</h2>
      <h3>{costForTwo}</h3>
      <h3>{locality}</h3>
      <h4>{areaName}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}⭐</h4>
    </div>
  );
};

export default RestaurantCard;
