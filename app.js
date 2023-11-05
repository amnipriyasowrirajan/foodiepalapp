import React from "react";
import ReactDOM from "react-dom/client";

// JSX => it is not HTML in Js =>HTML LIKE SYNTAX=> it looks like html
// JSX (transpiled before it reaches the Js) - PARSEL -BABEL
// JSX => Babel transpiled it to React.createElement => ReactElement-Js Object => HTMLElement(render)
/*
Header
  -logo
  -navbar
Body
  - search
  - RestaurantContainer
    - RestaurantCard
        -cloudinaryImageId
        -name of res,Star Rating,cuisine,Delivery tie etc
Footer
  - Copyright
  - Links
  - Address
  - Contact



*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={require("./assets/logo.jpg")} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  // console.log(props);

  const { resData } = props;

  //destructure it
  const {
    name,
    deliveryTime,
    cloudinaryImageId,
    cuisines,
    costForTwo,
    avgRating,
  } = props.restaurant;
  return (
    <div className="restaurant-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="restaurant-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="image of food"
      />
      <h3> {name}</h3>

      {/* .join(", ") */}
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}</h4>
      <h4> {deliveryTime} minutes</h4>

      {/* <h4>{resData.deliveryTime}in minutes</h4> */}
    </div>
  );
};

const RestaurantFoodList = [
  {
    id: 1,
    name: "Pulusu Ruchulu",
    costForTwo: "₹300 for two",
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    cuisines: [
      "Andhra",
      "Biryani",
      "Chettinad",
      "South Indian",
      "Desserts",
      "Beverages",
    ],
    cloudinaryImageId: "x4k95wnty3qth5dojlqd",
    avgRating: 4,
  },
  {
    id: 2,
    name: "McDonald's",
    costForTwo: "₹400 for two",
    deliveryTime: 27,
    cuisines: ["Burgers", "American"],
    cloudinaryImageId: "bb7ae131544c7d37e10fc5faf76f09d6",
    avgRating: 4.2,
  },
  {
    id: 3,
    name: "Mens Cotton Jacket",
    costForTwo: "350 for two",
    deliveryTime: 30,

    cuisines: ["Pizzas"],
    cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
    avgRating: 4.2,
  },
  {
    id: 4,
    name: "Subway",
    costForTwo: "₹350 for two",
    deliveryTime: 30,
    cuisines: ["Salads", "Snacks", "Desserts", "Beverages"],
    cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
    avgRating: 4,
  },
  {
    id: 5,
    name: "Roll Baby Roll",
    costForTwo: "₹250 for two",
    deliveryTime: 24,
    cuisines: ["Indian"],
    cloudinaryImageId: "egixe8rmkmd5utdjqxl0",
    avgRating: 4.3,
  },
  {
    id: 6,
    name: "WarmOven Cake & Desserts",
    costForTwo: "₹200 for two",
    deliveryTime: 32,
    cuisines: ["Bakery", "Desserts", "Ice Cream", "Beverages"],
    cloudinaryImageId: "e938fb5f416cc2c28b4b519cf27b04cc",
    avgRating: 4.0,
  },
  {
    id: 7,
    name: "Junior Kuppanna",
    costForTwo: "₹400 for two",
    deliveryTime: 34,
    cuisines: ["Biryani", "South Indian", "North Indian"],
    cloudinaryImageId: "4d04a257d504a5083c9dd59d14c8c612",
    avgRating: 4.2,
  },
  {
    id: 8,
    name: "Cupcake Bliss Cake & Desserts",
    costForTwo: "₹200 for two",
    deliveryTime: 30,
    cuisines: ["Bakery", "Desserts", "Ice Cream", "Beverages"],
    cloudinaryImageId: "40f193d8b23afb2988489dac1258962f",
    avgRating: 4.2,
  },
  {
    id: 9,
    name: "Chai Waale",
    costForTwo: "₹250 for two",
    deliveryTime: 30,
    cuisines: ["Beverages", "Snacks"],
    cloudinaryImageId: "fzuvochsvlsfrhgiivi3",
    avgRating: 4.6,
  },
  {
    id: 10,
    name: "Indiana Burgers",
    costForTwo: 5500,
    deliveryTime: 29,
    cuisines: ["Burgers", "American", "Fast Food", "Beverages", "Desserts"],
    cloudinaryImageId: "bverioshy8kuldk13oom",
    avgRating: 3.8,
  },
  {
    id: 11,
    name: "Kaati Zone Rolls & Wraps",
    costForTwo: "₹150 for two",
    deliveryTime: 26,
    cuisines: ["Fast Food", "Bengali", "Beverages", "Desserts"],
    cloudinaryImageId: "fg7xzs1hnmn8linjjktr",
    avgRating: 4.2,
  },
  {
    id: 12,
    name: "McDonald's Gourmet Burger Collection",
    costForTwo: "₹600 for two",
    cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
    deliveryTime: 23,
    cloudinaryImageId: "uqossrhek8wn9a0zpyeu",
    avgRating: 4.3,
  },
  {
    id: 13,
    name: "Momo Zone - The Momo Company",
    costForTwo: "₹200 for two",

    deliveryTime: 32,
    cuisines: ["Chinese", "Tibetan", "Fast Food"],
    cloudinaryImageId: "cb9qadkxcbv5xgz24xtb",
    avgRating: 3.8,
  },
  {
    id: 14,
    name: "Chai Kings",
    costForTwo: "₹150 for two",
    deliveryTime: 21,
    cuisines: ["Beverages", "Snacks", "Bakery"],
    cloudinaryImageId: "bziqpg7jodn2gh5wwstz",
    avgRating: 4.4,
  },
  {
    id: 15,
    name: "Dindigul Thalappakatti",
    costForTwo: "₹600 for two",
    deliveryTime: 27,
    cuisines: [
      "Biryani",
      "Barbecue",
      "South Indian",
      "Chinese",
      "North Indian",
    ],
    cloudinaryImageId: "b4oufcrv1ejzlgbz1oyb",
    avgRating: 4.1,
  },
  {
    id: 16,
    name: "Frozen Bottle - Milkshakes, Desserts And Ice Cream",
    costForTwo: "₹250 for two",
    deliveryTime: 24,
    cuisines: [
      "Beverages",
      "Desserts",
      "Ice Cream",
      "Waffle",
      "Bakery",
      "Healthy Food",
    ],
    cloudinaryImageId: "lyiqt0fjuyccgxaxtfib",
    avgRating: 4.1,
  },
  {
    id: 17,
    name: "Meat and eat",
    costForTwo: "₹1000 for two",
    deliveryTime: 42,
    cuisines: ["Indian"],
    cloudinaryImageId: "m8xcrq2jfsjdrhpwem7y",
    avgRating: 4.1,
  },
  {
    id: 18,
    name: "Double Roti",
    costForTwo: "₹900 for two",
    deliveryTime: 40,
    cuisines: ["Burgers", "Pizzas", "Continental", "Snacks"],
    cloudinaryImageId: "ip22x5eg6mklacufksdy",
    avgRating: 4.3,
  },
  {
    id: 19,
    name: "Radio Room",
    costForTwo: "₹900 for two",
    deliveryTime: 42,
    cuisines: ["Pizzas", "North Indian", "Continental", "Italian"],
    cloudinaryImageId: "ma6ostczsu3sbxemm36c",
    avgRating: 4.5,
  },
  {
    id: 20,
    name: "Mex Bowl Inc",
    costForTwo: "₹600 for two",
    deliveryTime: 36,
    cuisines: ["American", "Mexican", "Continental"],
    cloudinaryImageId: "anaze4xmtd97phygqfoq",
    avgRating: 4.1,
  },
];
// not using keys(not acceptable) <<<< index as key => use is it last result<<<<< unique (best practice)
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        {/* map function you can use forloop also */}
        {RestaurantFoodList.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
