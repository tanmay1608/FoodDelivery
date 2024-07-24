import { useParams } from "react-router-dom";
import ResMenuShimmer from "./ResMenuShimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu"
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";


const RestaurantMenu = () => {
  const { resId } = useParams();

  const [showIndex,setShowIndex] = useState(-1);


  console.log("Inside RestaurantMenu");

  const resMenu=useRestaurantMenu(resId);
  console.log("inside res menu:"+ resMenu.length);





  if (resMenu.length === 0) {
    return <ResMenuShimmer />;
  }
  const { name, avgRating, areaName, cuisines, sla } =
    resMenu[2]?.card?.card?.info;
  const { minDeliveryTime, maxDeliveryTime } = sla;

  const groupCardMenu = resMenu.find((card) => card.groupedCard);
  const { itemCards, categories } =
    groupCardMenu?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
    console.log(groupCardMenu?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card["@type"]);

    const itemCategory=groupCardMenu?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item)=> item?.card?.card["@type"]=== "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log("hello",itemCategory[0]);

  return (
    <div className="flex flex-col items-center p-8 ">
      <div className="res-menu-content w-7/12 ">
        <h1 className="text-xl font-bold ">{name}</h1>
        <div className="rounded-md m-4 p-4 shadow-lg">
          <h3 className="p-2">⭐{avgRating}</h3>
          <p className="text-orange-500 font-bold p-2">{cuisines.join(", ")}</p>
          <p>
            <span className="font-semibold p-2">Outlet: </span> {areaName}
          </p>
          <p className="font-semibold p-2">
            {" "}
            <span >
              {minDeliveryTime}-{maxDeliveryTime}{" "}
            </span>{" "}
            min
          </p>
        </div>
       
      </div>

      <div className="p-4 flex items-center justify-center  w-7/12">
        <span className="border-2  w-4/12 border-black"></span>
      <span className="uppercase font-bold mx-2 text-black">menu</span>
      <span className="border-2  w-4/12 border-black  "></span>
      </div>
    
      {/*categories accordion */}
      {/*controlled component*/}
      {itemCategory.map((category,index)=><RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card}  showItems={index === showIndex && true} setShowIndex={(toggle)=>{
        toggle ? setShowIndex(index) :
        setShowIndex(-1)
        }}/>)}
    </div>
  );
};

export default RestaurantMenu;
