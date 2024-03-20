import { CARD_URL } from "../utils/constants";

const RestaurantCards = () => {
  return (
    <div className="res-card">
      <img className="img-card" src={CARD_URL}></img>
      <h3>landhour bakehouse</h3>
      <h4>asian,north-indian,</h4>
      <h4>asian,north-indian,</h4>
    </div>
  );
};

export default RestaurantCards;
