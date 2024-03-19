import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://static.vecteezy.com/system/resources/previews/011/402/817/original/call-food-logo-design-food-delivery-service-logo-concept-free-vector.jpg"
        />
      </div>
      <div className="nav-item">
        <ul>
          <li>home</li>
          <li>about us</li>
          <li>contact us</li>
          <li>cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCards = () => {
  return (
    <div className="res-card">
      <img
        className="img-card"
        src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=768,574"
      ></img>
      <h3>landhour bakehouse</h3>
      <h4>asian,north-indian,</h4>
      <h4>asian,north-indian,</h4>
    </div>
  );
};
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

const AppLayout = () => {
  return (
    <div className="app">
      <Header></Header>
      <Body></Body>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
