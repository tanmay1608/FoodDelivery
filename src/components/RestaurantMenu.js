import { useParams } from "react-router-dom";
import ResMenuShimmer from "./ResMenuShimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu"


const RestaurantMenu = () => {
  const { resId } = useParams();

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

  return (
    <div className="res-menu-body">
      <div className="res-menu-content">
        <h1>{name}</h1>
        <div className="res-info-card">
          <h3>⭐{avgRating}</h3>
          <p className="cuisine">{cuisines.join(", ")}</p>
          <p>
            <span>Outlet: </span> {areaName}
          </p>
          <p>
            {" "}
            <span>
              {minDeliveryTime}-{maxDeliveryTime}{" "}
            </span>{" "}
            min
          </p>
        </div>
        <div>
          <h1>Menu</h1>
          {(categories?.length ? categories[0].itemCards : itemCards).map(
            (item) => {
              return (
                <div key={item?.card?.info?.id} className="menu-item">
                  <h3>{item?.card?.info?.name}</h3>
                  {/* key in object  : using this we can find whether key is present in object or not*/}
                  <h4>Rs {"price" in item?.card?.info ? item?.card?.info.price/100 : item?.card?.info.defaultPrice / 100}</h4>
                  <p>⭐{item?.card?.info?.ratings?.aggregatedRating?.rating ?? "Not rated"}</p>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
