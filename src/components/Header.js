import { LOGO_URL } from "../utils/constants";
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


 
const Header = () => {
  
  console.log("Header Rendered");

 
  const [login,setLogin]=useState("login");

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
          <li className="p-2 my-0 mx-2 list-none rounded-md hover:bg-sky-500 hover:text-white"><Link to={"/"}>Home</Link></li>
          <li className="p-2 my-0 mx-2 list-none   rounded-md hover:bg-sky-500 hover:text-white"><Link to={"/about"}>About Us</Link></li>
          <li className="p-2 my-0 mx-2 list-none   rounded-md hover:bg-sky-500 hover:text-white"><Link to={"/contact"}>Contact Us</Link></li>
          <li className="p-2 my-0 mx-2 list-none   rounded-md hover:bg-sky-500 hover:text-white"><Link to={"/grocery"}>Grocery</Link></li>
          <li className="p-2 my-0 mx-2 list-none">Cart</li>
          <button className="p-2 my-0 mx-2 cursor-pointer bg-sky-500 hover:bg-sky-700 hover:text-white rounded-md" onClick={function(){
            
            const updatedLogin = login === "login" ? "log out" : "login";
            setLogin(updatedLogin);
          }}>{login}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
