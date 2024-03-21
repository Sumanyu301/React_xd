import RestaurantCards from "./RestaurantCards";
import { useEffect, useState } from "react";
const Body = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING"
    );
    const result = await data.json();
    setlistOfRestaurants(
      result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  return (
    <div className="body">
      <div className="search-container">
        <div className="search">
          <input
            type="text"
            onChange={(e) => {
              let data = listOfRestaurants.filter((resData) =>
                resData?.info?.name
                  .toLowerCase()
                  .includes(e.target.value.toLowerCase())
              );
              setSearchData(data);
            }}
          ></input>
          <button
            onClick={() => {
              setlistOfRestaurants(searchData);
            }}
          >
            search
          </button>
        </div>
        <button
          onClick={() => {
            const filteredData = listOfRestaurants.filter(
              (restaurants) => restaurants.info.avgRating > 4.4
            );
            setlistOfRestaurants(filteredData);
          }}
        >
          top rated restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {listOfRestaurants.map((restaurants) => (
          <RestaurantCards key={restaurants.info.id} resData={restaurants} />
        ))}
      </div>
    </div>
  );
};

export default Body;
