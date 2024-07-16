import {useState,useEffect} from "react";
import {API_URL} from "./constants"

const useAPIData=()=>{
   // console.log("Inside UseApi");
 
   const [mainList, setMainList]= useState([]);
   const [updatedRes, setUpdatedRes] = useState([]);
  useEffect(() => {
   // console.log("Inside useApi useEffect");
    fetchData().catch((error)=>{
      console.log(error);
    });
    
  }, []);

  const fetchData = async () => {

  
    const data= await fetch(API_URL);

 
    const json =await data.json();

    
 
   for(let card of json?.data?.cards){
    if(card.card.card.id === "top_brands_for_you"){
      setUpdatedRes(card.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setMainList(card.card?.card?.gridElements?.infoWithStyle?.restaurants);
      break;
    }
   
   }
};


  return [mainList,updatedRes,setUpdatedRes];
}

export default useAPIData;