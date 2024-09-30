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
import {Provider} from "react-redux";
import appStore from "./Store/appStore";
import Cart from "./components/Cart";
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


    //providing the store to our App to make the Redux store available to our React components

    <Provider store={appStore}>

    <UserContext.Provider value={{loggedInUser:userName, setUserName}}>
      <div className="app">
       
        <Header />
        
     
      <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
    
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
      },
      {
        path:"/cart",
        element:<Cart/>
      },
    ],
    errorElement: <Error/> //if there is any eror show this component   
  },
 
]);

console.log(appRouter);

// but, we have to provide this configuration to render it on page
// so we have to provide this configuration to RouterProvider component imported from react-router-dom 


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);// earlier we were provide Applayout directly but now we provide out configuration using RouterProvider

