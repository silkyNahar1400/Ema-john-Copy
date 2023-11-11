import React from "react";
import logo from "../../images/logo.png"
import "./header.css";

const Header = ()=> {
    return(
        <div className="father">
            <img src= {logo} alt="logo img" />
        </div>
    )
}
export default Header;