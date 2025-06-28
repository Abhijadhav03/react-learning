import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import StatusIndicator from "./StatusIndicator";
import { motion } from "framer-motion";

const Header = () => {
  let btnName = "Login";
  const [btnNameReact, setbtnNameReact] = useState("Login");

  return (
    <div className="header flex justify-between items-center px-6 py-4 shadow-md bg-white">
      {/* Logo Section */}
      <motion.div
        className="logo-container"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/">
          <img className="logo w-28 h-auto" src={LOGO_URL} alt="App Logo" />
        </Link>
      </motion.div>

      {/* Navigation Section */}
      <motion.div
        className="nav-items flex items-center gap-8"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <ul className="flex items-center gap-6 text-gray-700 font-medium">
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
                className="w-6 h-6 hover:scale-110 transition"
              />
            </Link>
          </li>
        </ul>

        {/* Login Button */}
        <button
          className="login-btn bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-md transition"
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
