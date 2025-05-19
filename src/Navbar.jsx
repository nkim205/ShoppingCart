import React from "react";
import NavButton from "./NavButton";

const NavBar = ({numitem}) => {
    return (      
        <div className="bg-gray-400 flex flex-row justify-between">
            <NavButton path="./images/home.png" alt="homebtn" desc="/"/>
            <p>{numitem}</p>
            <NavButton path="./images/cart.png" alt="carbtn" desc="/cart"/>
        </div>
    )
}
export default NavBar;