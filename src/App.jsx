import { StrictMode, useState } from 'react';
import Home from './Home.jsx';
import './index.css';
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./Cart.jsx";
import Checkout from "./Checkout.jsx";

function App({numitem, setNumItem}) {

    const addFn = (num) => {
    setNumItem(prev => {
        const updated = prev + num;
        console.log("Updated numitem:", updated); 
        return updated;
        });
    };


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home numitem={numitem} addFn={addFn}/>,
    },
    {
      path: "/cart",
      element: <Cart numitem={numitem}/>,
    },
    {
      path: "/checkout",
      element: <Checkout />
    }
  ]);

  return <RouterProvider router={router} />;

}

export default App;