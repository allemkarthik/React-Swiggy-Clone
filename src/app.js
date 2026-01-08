import './index.css';

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/ResturantMenu.js";
// import Shimmer from "./components/shimmer.js";
import { lazy, Suspense } from "react";
import userContext from './utils/userContext.js';


const Grocery = lazy(() => import("./components/Grocery.js"));
const Applayout = () => {
  const [userName,setUserName]=useState()
  useEffect(()=>{
    const data={
      name: "karthik"
    };
    setUserName(data.name)
  },[])
  return (
    <userContext.Provider value={{loggedInUser:userName}}>
      <div className="app">
      <Header />
      <Outlet />
    </div>
    </userContext.Provider>
    
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer/>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/resturants/:resid",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
