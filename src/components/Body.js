import RestaurantCards from "./RestaurantCards";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const [listOfRestaurants, setlistOfRestaurants] = useState();
  const [searchData, setSearchData] = useState();
  const [renderData, setrenderData] = useState([]);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING"
    );
    const result = await data.json();
    setlistOfRestaurants(
      result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setrenderData(
      result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  return !listOfRestaurants ? (
    <Shimmer></Shimmer>
  ) : (
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
              setrenderData(searchData);
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
            setrenderData(filteredData);
          }}
        >
          top rated restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {renderData.map((restaurants) => (
          <RestaurantCards key={restaurants?.info?.id} resData={restaurants} />
        ))}
      </div>
    </div>
  );
};

export default Body;
