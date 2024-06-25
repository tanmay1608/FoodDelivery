import { LOGO_URL } from "../utils/constants";
import {useState, useEffect} from "react";

 
const Header = () => {

 
  const [login,setLogin]=useState("login");
  

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
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
