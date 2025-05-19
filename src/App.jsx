import { useState } from 'react';
import Home from './Home.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./Cart.jsx";
import Checkout from "./Checkout.jsx";

function App() {
    // State is now directly in App instead of being passed from outside
    const [numitem, setNumItem] = useState(0);

    const addFn = (num) => {
        setNumItem(prev => {
            const updated = prev + num;
            console.log("Updated numitem:", updated); 
            return updated;
        });
    };

    // Router creation stays the same, but now it closes over the state in this component
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