// import { AnimatedModal } from "./ui/animated-modal";

//import { CDN_URL } from "../utils/constants";
import React from "react";
import { motion } from "framer-motion";

// ✅ Restaurant Card Component
const RestaurantCard = ({ resData }) => {
  if (!resData?.info) {
    return <div className="res-card">No data available</div>;
  }
console.log("resData", resData);
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    locality,
  } = resData.info;

  return (
    <motion.div
      className="res-card"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <img
        className="res-img"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300/${cloudinaryImageId}`}
        alt={name}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>✳️ {avgRating} stars</h4>
      <h4>{locality}</h4>
      <h4>{costForTwo}</h4>
      <button className="btn-buy">Menu</button>
    </motion.div>
  );
};

export default RestaurantCard;

// ✅ Higher Order Component with Discount Badge Animation
export const withExtraInfo = (WrappedComponent) => {
  return (props) => {
    const discountInfo = props?.resData?.info?.aggregatedDiscountInfoV3;
    const header = discountInfo?.header;
    const subHeader = discountInfo?.subHeader;

    return (
      <motion.div
        className="res-card-wrapper"
        style={{ position: "relative" }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {header && (
          <motion.div
            className="discount-badge"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              backgroundColor: "#ff4d4f",
              color: "#fff",
              padding: "4px 8px",
              fontSize: "12px",
              borderRadius: "4px",
              zIndex: 10,
              lineHeight: "1.2",
            }}
          >
            <div>{header}</div>
            {subHeader && (
              <div style={{ fontSize: "11px", opacity: 0.9 }}>{subHeader}</div>
            )}
          </motion.div>
        )}

        {/* Render the original RestaurantCard with animation */}
        <WrappedComponent {...props} />
      </motion.div>
    );
  };
};
