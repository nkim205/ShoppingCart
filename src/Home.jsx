import React from "react";
import './index.css';
import NavBar from "./NavBar";
import CreateCardList from "./CardList"

const Home = ({numitem, addFn}) => {

    return (
        <div>
            <NavBar numitem={numitem}/>
            <CreateCardList addFn={addFn}/>
        </div>
    );
}

// {products.map((product) => (
//     function(product)
// ))}

export default Home;