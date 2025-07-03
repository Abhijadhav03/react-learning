import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import StatusIndicator from "./StatusIndicator";
import { motion } from "framer-motion";
import UserContext from "../context/UserContext"; 
import { useSelector } from "react-redux";

const Header = () => {
  let btnName = "Login";
  const [btnNameReact, setbtnNameReact] = useState("Login");
  const UserData = useContext(UserContext);
  console.log(UserData);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
   <div className="header flex justify-between items-center px-5 py-3 shadow-md bg-white">
  {/* Logo Section */}
  <motion.div
    className="logo-container"
    initial={{ opacity: 0, x: -30 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Link to="/">
      <img className="logo w-36 h-auto" src={LOGO_URL} alt="App Logo" />
    </Link>
  </motion.div>

  {/* Navigation Section */}
  <motion.div
    className="nav-items flex items-center gap-10"
    initial={{ opacity: 0, x: 30 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    <ul className="flex items-center gap-8 text-gray-700 font-medium text-lg">
      <li>
        <Link to="/" className="hover:text-blue-600 transition">Home</Link>
      </li>
      <li>
        <Link to="/about" className="hover:text-blue-600 transition">About us</Link>
      </li>
      <li>
        <Link to="/contactus" className="hover:text-blue-600 transition">Contact us</Link>
      </li>
      <li>
        <Link to="/cart" className="relative">
          <img
            src="https://cdn.iconscout.com/icon/premium/png-512-thumb/cart-icon-download-in-svg-png-gif-file-formats--shopping-online-trolley-pack-e-commerce-icons-1597724.png?f=webp&w=512"
            alt="Cart"
            className="w-8 h-8 hover:scale-110 transition"
          /><span>{}</span>
        </Link>
      </li>
    </ul>

    {/* Login Button */}
    <button
      className="login-btn bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md text-lg transition"
      onClick={() =>
        btnNameReact === "Login"
          ? setbtnNameReact("Logout")
          : setbtnNameReact("Login")
      }
    >
      {btnNameReact}
    </button>

    {/* Online Status */}
    <StatusIndicator />
  </motion.div>
</div>
  );
};

export default Header;
