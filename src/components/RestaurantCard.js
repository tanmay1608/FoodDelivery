import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

//Inline css in jsx
const styleCard = {
  backgroundColor: "#f0f0f0",
};
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, cloudinaryImageId } = resData?.info;
  const { slaString } = resData?.info?.sla;


  return (
    <div className=" bg-sky-100 mx-2 mb-6 w-48 border border-solid border-black cursor-pointer rounded-t-none rounded-b-2xl transition-transform  duration-300 ease-in-out hover:scale-105 hover:shadow-[10px_10px_20px_0_rgba(0,0,0,0.2)] " style={styleCard}>
      <img className="w-full h-36 object-cover" src={CDN_URL + cloudinaryImageId} />
      <h3 className="p-2 font-bold ">{name}</h3>
      <h5 className="p-2 break-words ">{cuisines.join(", ")}</h5>
      <h4 className="p-2 font-semibold">⭐ {avgRating}</h4>
      <h4 className="p-2 font-semibold">{slaString}</h4>
    
    </div>
  );
};
//Destructuring of object
// const RestaurantCard=({resName, cuisine})=>{

//     return (
//         <div className="res-card" style={styleCard}>
//             <img  className="res-logo" src="https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg"/>
//             <h3>{resName}</h3>
//             <h4>{cuisine}</h4>
//             <h4>⭐ 4.4</h4>
//             <h4>38 min</h4>
//         </div>
//     )
// }


export const isRestaurantClosed=(RestaurantCard)=>{
  return (props)=>{
    return (
    <div className="relative flex ">
      
   <RestaurantCard {...props}/>
   <div className="absolute inset-0 bg-black opacity-50 flex justify-center items-center">
    <span className="text-white text-lg font-bold">Closed</span>
   </div>
 
    </div>
    );
  }
}

export default RestaurantCard;
