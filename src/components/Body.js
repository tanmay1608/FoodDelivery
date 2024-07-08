import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";

const Body = () => {
  //Local State Variable - super powerful variable
  const [mainList, setMainList]= useState([]);
  const [updatedRes, setUpdatedRes] = useState([]);
  const [searchtext, setSearchText] = useState("");

  //Normal JS variable
  //let updatedRes;

  //useEffect Hooks

  // useEffect(()=>{
  //   console.log("inside useEffect");
  //   //this will be called after body component got rendered.
  // },[]);

  // console.log("inside body");// this will be called before useEffect

  useEffect(() => {
    fetchData().catch((error)=>{
      console.log(error);
    });
    
  }, []);

  useEffect(()=>{
    console.log("update res updated");
  },[updatedRes]);

  const fetchData = async () => {

  
      const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.86255&lng=75.813741&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

   
      const json =await data.json();

      
   
     for(let card of json?.data?.cards){
      if(card.card.card.id === "top_brands_for_you"){
        setUpdatedRes(card.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setMainList(card.card?.card?.gridElements?.infoWithStyle?.restaurants);
        break;
      }
     
     }
    
   
     
    
   
    

   
  };

  // This is known as conditional rendering
  // if(updatedRes.length === 0 ){
  //   return <Shimmer/>;
  // }

  return updatedRes.length === 0 ? (
    <Shimmer />
  ) : (
    //in jsx inline css is not like normal html , here style takes js object.
    // why parenthesis , beacuse whenever we have to write js inside js we use {}
    // but not a prefered way
    <div className="body">
      <div className="search">
        <input
          type="text"
          placeholder="Search for restaurant.."
          value={searchtext}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            const searchUpdatedList = mainList.filter((res) => {
              return res.info.name
                .toLowerCase()
                .includes(searchtext.toLowerCase());
            });
            console.log(searchUpdatedList);
            setUpdatedRes(searchUpdatedList);
          }}
        >
          Search
        </button>
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
          <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id} ><RestaurantCard  resData={restaurant} /></Link>
          // <RestaurantCard key={restaurant.info.id}  resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
