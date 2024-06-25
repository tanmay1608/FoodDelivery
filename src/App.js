import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

//take list of paths
const appRouter=createBrowserRouter([
  {
    // so it means if my path is / load the Element(home page)
    path:"/",
    element: <AppLayout/>,
    errorElement: <Error/> //if there is any eror show this component   
  },
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/contact",
    element:<Contact/>
  }
]);

console.log(appRouter);

// but, we have to provide this configuration to render it on page
// so we have to provide this configuration to RouterProvider component imported from react-router-dom 


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);// earlier we were provide Applayout directly but now we provide out configuration using RouterProvider

