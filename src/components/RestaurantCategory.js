import ItemList from "./ItemList";
import {useState} from "react";

const RestaurantCategory = ({ data, showItems ,setShowIndex}) => {
  console.log("lifted state",showItems);
   

   //const [showItems,setShowItems]=useState(false);

   



  const handleClick=()=>{
   // setShowItems(!showItems);
  
   console.log("Inside handleClick");
   setShowIndex(!showItems);
   
  };

  return (
    <div className=" w-7/12 p-4   border-b-[12px] border-gray-300 ">
      <div className="flex justify-between  cursor-pointer " onClick={handleClick}>
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span className="font-bold ">🔽</span>
      </div>

        
        {
            //this is also a way for conditional rendering
        showItems && <ItemList itemCards={data.itemCards} />
        }
    </div>
  );
};

export default RestaurantCategory;
