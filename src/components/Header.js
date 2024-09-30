import { LOGO_URL } from "../utils/constants";
import {useState, useEffect, useContext} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


 
const Header = () => {
  
  console.log("Header Rendered");

 
  const [login,setLogin]=useState("login");

  //Selector is hook provided by react-redux
  //this hook gives access to the store
  //subscribing to the store using a selector
  // it give access to store and we can choose what part(slice of store we want to access)

  //we are just subscribing to the small portion of the store
  const cartItems=useSelector((store)=> store.cart.items);  
  

  //const data=useContext(UserContext);
  const data=useContext(UserContext);

  const onlineStatus=useOnlineStatus();
  
  

  //if no dependency array => useEffect will be called on every render
  // if dependency array is empty = [] => useEffect is called on iniyial render(just once).body
  // if dependency array is  [login] => called everytime login is updated
  useEffect(()=>{
    //console.log("inside use effect");
  },[login]);
  

  return (
    <div className="flex justify-between items-center border-solid border-black border ">
      <div className="logo-container">
        <img className="w-20" src={LOGO_URL}></img>
      </div>
      <div className=" flex justify-center items-center">
        <ul className=" flex text-base">
          <li className="p-2 my-0 mx-2 list-none">Online Status: {onlineStatus ? "🟢" : "🔴" }</li>
          <li className="p-2 my-0 mx-2 list-none rounded-md hover:bg-sky-500 hover:text-white text-base"><Link to={"/"}>Home</Link></li>
          <li className="p-2 my-0 mx-2 list-none   rounded-md hover:bg-sky-500 hover:text-white"><Link to={"/about"}>About Us</Link></li>
          <li className="p-2 my-0 mx-2 list-none   rounded-md hover:bg-sky-500 hover:text-white"><Link to={"/contact"}>Contact Us</Link></li>
          <li className="p-2 my-0 mx-2 list-none   rounded-md hover:bg-sky-500 hover:text-white"><Link to={"/grocery"}>Grocery</Link></li>
          <li className="p-2 my-0 mx-2 list-none font-bold"><Link to={"/cart"}>🛒 ({cartItems.length} Items)</Link></li>
          <button className="p-2 my-0 mx-2 cursor-pointer bg-sky-500 hover:bg-sky-700 hover:text-white rounded-md" onClick={function(){
            
            const updatedLogin = login === "login" ? "log out" : "login";
            setLogin(updatedLogin);
          }}>{login}</button>
           <li className="p-2 my-0 mx-2 list-none">{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
