import React,{lazy,Suspense, useState,useEffect} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
//import Grocery from "./components/Grocery";


//Lazy loading/chunking/code spliting/dynamic import/dynmaic bundling/ on demand loading
const Grocery=lazy(()=> import("./components/Grocery"));


const AppLayout = () => {

//Authentication

const [userName,setUserName]=useState();

useEffect(()=>{
  //Make an API call
  const data={
    name:"Tanmay Barjatya"
  }
  setUserName(data.name);
  //how i pass this information to contenxt
},[]);



  return (

    //so here loggedInUser value is overrided
    //so anything we wrap inside .Provider for them value is overrided
    //as for header value will be kumar for everone inside app value will be Tanmay Barjatya outside .Provider value will be dafault
    //we can have Nested Providers

    //so using this way we cna read write conext from anywhere
    <UserContext.Provider value={{loggedInUser:userName, setUserName}}>
      <div className="app">
        <UserContext.Provider value={{loggedInUser:"Kumar"}}>
        <Header />
        </UserContext.Provider>
     
      <Outlet />
    </div>
    </UserContext.Provider>
    
  );
};

//take list of paths
const appRouter=createBrowserRouter([
  {
    // so it means if my path is / load the Element(home page)
    path:"/",
    element: <AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<h1>Loading......</h1>}><Grocery/></Suspense>
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>
      }
    ],
    errorElement: <Error/> //if there is any eror show this component   
  },
 
]);

console.log(appRouter);

// but, we have to provide this configuration to render it on page
// so we have to provide this configuration to RouterProvider component imported from react-router-dom 


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);// earlier we were provide Applayout directly but now we provide out configuration using RouterProvider

