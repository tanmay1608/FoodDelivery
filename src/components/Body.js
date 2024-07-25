import RestaurantCard, { isRestaurantClosed } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useAPIData from "../utils/useAPIData";
import UserContext from "../utils/UserContext";

const Body = () => {
  console.log("Body Rendered");
  //Local State Variable - super powerful variable
  // const [mainList, setMainList]= useState([]);
  // const [updatedRes, setUpdatedRes] = useState([]);
  const [searchtext, setSearchText] = useState("");
  const {loggedInUser,setUserName}=useContext(UserContext);
  const ClosedRestaurant = isRestaurantClosed(RestaurantCard);
  

  //Normal JS variable
  //let updatedRes;

  //useEffect Hooks

  // useEffect(()=>{
  //   console.log("inside useEffect");
  //   //this will be called after body component got rendered.
  // },[]);

  // console.log("inside body");// this will be called before useEffect

  // useEffect(() => {
  //   console.log("inside useEffect");
  //   fetchData().catch((error)=>{
  //     console.log(error);
  //   });

  // }, []);

  // const fetchData = async () => {

  //     const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.86255&lng=75.813741&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

  //     const json =await data.json();

  //    for(let card of json?.data?.cards){
  //     if(card.card.card.id === "top_brands_for_you"){
  //       setUpdatedRes(card.card?.card?.gridElements?.infoWithStyle?.restaurants);
  //       setMainList(card.card?.card?.gridElements?.infoWithStyle?.restaurants);
  //       break;
  //     }

  //    }

  // };

  const [mainList, updatedRes, setUpdatedRes] = useAPIData();
  

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1>Oops!!! please check your network.</h1>;

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
    <div className="flex flex-col items-center">
      <div className="p-2">
        <input
          className="p-2 m-4 border border-solid  focus:outline-1 focus: outline-gray-400"
          type="text"
          placeholder="Search for restaurant.."
          value={searchtext}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
        ></input>
        <button
          className="p-2 m-1 cursor-pointer bg-sky-500 hover:bg-sky-700 hover:text-white rounded-md"
          onClick={() => {
            console.log("Inside log click");
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
          className="p-2 m-1 cursor-pointer bg-sky-500 hover:bg-sky-700 hover:text-white rounded-md"
          onClick={() => {
            filteredList = updatedRes.filter((restaurant) => {
              return restaurant.info.avgRating > 4.5;
            });

            setUpdatedRes(filteredList);
          }}
        >
          Filter
        </button>

          {/*so even one compoenent is lazy loaded and it is using data from conetex then even before its loading if data from context chnages then it will also reflect on recently loaded compoenet */}
        <input
          className="p-2 m-4 border border-solid  focus:outline-1 focus: outline-gray-400"
          type="text"
          placeholder="Search for restaurant.."
          value={loggedInUser}
          onChange={(event) => {
            setUserName(event.target.value);
          }}
        ></input>


      </div>
      <div className="flex flex-wrap justify-center">
        {updatedRes.map((restaurant) => (
        
          <Link
            className="underline-none text-black text-opacity-80 flex flex-wrap justify-center m-1"
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.isOpen ? (
              <RestaurantCard resData={restaurant} />
            ) : (
              <ClosedRestaurant resData={restaurant} />
            )
            }
          </Link>
          // <RestaurantCard key={restaurant.info.id}  resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
