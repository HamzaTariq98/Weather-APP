import React from "react";
import './Header.css'



const Header = (props) =>{
    return(
        <div className="header-container">
            <h1 className="Header-header" onClick={()=> console.log(props.email)}>Welcome to weather App</h1>
        </div>
    )
} 

export default Header;