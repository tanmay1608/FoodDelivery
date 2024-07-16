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
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus ? "🟢" : "🔴" }</li>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about"}>About Us</Link></li>
          <li><Link to={"/contact"}>Contact Us</Link></li>
          <li>Cart</li>
          <button className="login" onClick={function(){
            
            const updatedLogin = login === "login" ? "log out" : "login";
            setLogin(updatedLogin);
          }}>{login}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
