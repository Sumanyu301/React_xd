import RestaurantCards from "./RestaurantCards";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        <RestaurantCards />
        <RestaurantCards />
        <RestaurantCards />
        <RestaurantCards />
        <RestaurantCards />
      </div>
    </div>
  );
};

export default Body;