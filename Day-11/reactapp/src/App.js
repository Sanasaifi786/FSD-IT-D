import React from "react";
import "./App.css";

const Header = ()=>{
    return (
        <div className="header">
            <img className="header-logo" src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png"/>
            <ul className="nav-items">
                <li>Home</li>
                <li>Cart</li>
                <li>About</li>
            </ul>
        </div>
    );
}

const Search = ()=>{
    return (
        <div>
        <input type="text" name="search-bar"/>
        <input type="button" value="search" />
    </div>
    )
}

const Products = (product)=>{
    return (
        <div>
            <img src=""/>
            <p>Tool</p>
        </div>
    )
}

const Body = ()=>{
    return (
        <>
        <Search/>
        <div className="product">
            {Products.map((product)=><Products product = {Products}/>)}
        </div>
        </>
    )
}

const App = ()=>{
    return(
        <>
            <Header/>
            <Body/>
        </>
    )
}

export default App;