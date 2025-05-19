import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Cart from './Cart.jsx';
import Checkout from './Checkout.jsx';
import './index.css';

function App() {
    const [numitem, setNumItem] = useState(0);

    const addFn = (num) => {
        setNumItem(prevItems => {
            const updated = prevItems + num;
            console.log("Updated numitem:", updated);
            return updated;
        });
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home numitem={numitem} addFn={addFn} />} />
                <Route path="/cart" element={<Cart numitem={numitem} />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;