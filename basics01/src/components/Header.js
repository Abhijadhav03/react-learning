import { Link } from "react-router-dom";
import {LOGO_URL} from "../utils/constants";
import { useState } from "react";
import StatusIndicator from "./statusindicator";
const Header = () => {
let btnName = "Login";
const [btnNameReact, setbtnNameReact] = useState("Login");
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className="logo" src={LOGO_URL}/>
            </div>
           <div className='nav-items'>
              <ul>
                <Link to="/">
              <li>Home</li>
              </Link>
              <Link to="/about">
              <li>About us</li>
              </Link >
              <Link to="/contactus">
              <li>Contact us</li>
              </Link>
             <Link to="/cart">
              <li className='cart-logo'><img src='https://cdn.iconscout.com/icon/premium/png-512-thumb/cart-icon-download-in-svg-png-gif-file-formats--shopping-online-trolley-pack-e-commerce-icons-1597724.png?f=webp&w=512'/></li>
              </Link>
              <button
    className="login-btn"
    onClick={() => {
        btnNameReact === "Login" ? setbtnNameReact("Logout") : setbtnNameReact("Login");
    }}
>
    {btnNameReact}
     
</button></ul>
<StatusIndicator />
           </div>
            </div>
    )
};

export default Header