import { CDN_URL } from "../utils/constants";

//Inline css in jsx
const styleCard = {
  backgroundColor: "#f0f0f0",
};
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, cloudinaryImageId } = resData?.info;
  const { slaString } = resData?.info?.sla;

  return (
    <div className="res-card" style={styleCard}>
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h4>⭐ {avgRating}</h4>
      <h4>{slaString}</h4>
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

export default RestaurantCard;
