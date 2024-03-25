import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Menu = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const [resData, setresData] = useState();
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.47570&lng=76.59010&restaurantId=171724"
    );
    const result = await data.json();
    setresData(result?.data?.cards[0]?.card?.card?.info);
  };

  return (
    <div>
      <div>hello</div>
    </div>
  );
};

export default Menu;
