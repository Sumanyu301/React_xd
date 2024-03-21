import { CARD_URL, CDN_URL } from "../utils/constants";

const RestaurantCards = (props) => {
  const { name, cuisines, avgRating, cloudinaryImageId } = props?.resData?.info;
  return (
    <div className="res-card">
      <img className="img-card" src={CDN_URL + cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
    </div>
  );
};

export default RestaurantCards;
