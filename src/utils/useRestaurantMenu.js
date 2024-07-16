import {useState,useEffect} from "react";
import { MENU_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  //fetch
  console.log("inside useRestaurantMenu");
  const [resMenu,setResMenu]=useState([]);
  console.log("inside useRestaurantMenu: "+resMenu.length);

  useEffect(()=>{
      fetchMenu().catch((error) => {
      console.log(error);
    });
  },[]);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);

    const json = await data.json();
    console.log(json?.data?.cards);
   
    setResMenu(json?.data?.cards);
  };


  return resMenu;
};

export default useRestaurantMenu;
