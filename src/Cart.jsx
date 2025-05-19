import React from "react";
import NavBar from "./NavBar"
import CheckoutBtn from "./CheckoutBtn"

const Cart = ({numitem}) => {
    return (      
        <div className="">
            <NavBar numitem={numitem}/>
            <CheckoutBtn numitem={numitem}/>
        </div>
    )
}
export default Cart;