import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";



const Body = () => {
//Local State Variable - super powerful variable
 const [updatedRes, setUpdatedRes]=useState(resList);

//Normal JS variable 
//let updatedRes;


  


  return (
    //in jsx inline css is not like normal html , here style takes js object.
    // why parenthesis , beacuse whenever we have to write js inside js we use {}
    // but not a prefered way
    <div className="body">
      <div className="search">
        <input placeholder="Search for restaurant.."></input>
        <button
          onClick={() => {
            filteredList = updatedRes.filter((restaurant) => {
              return restaurant.info.avgRating > 4.5;
            });

            setUpdatedRes(filteredList);
          }}
        >
          Filter
        </button>
      </div>
      <div className="restaurant-conatiner">
        {updatedRes.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
