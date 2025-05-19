import { StrictMode, useState } from 'react';
import Home from './Home.jsx';
import './index.css';
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./Cart.jsx";
import Checkout from "./Checkout.jsx";
import App from "./App.jsx";

function Start() {

    const [numitem, setNumItem] = useState(0);

    return(
        <App numitem={numitem} setNumItem={setNumItem}/>
    )

}




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Start />
  </StrictMode>,
)
