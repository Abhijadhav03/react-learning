import {useState, useEffect } from "react";
import ShimmerCard from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = ()=> {

     const [resInfo , setResInfo] = useState(null);

     const {resId} = useParams();
     useEffect(() => {
        fetchMenu();
      }, [resId]); // Added resId as a dependency
    
      const fetchMenu = async () => {
        try {
            const data = await fetch(`https://instafood.onrender.com/api/menu?lat=12.786322446615058&lng=77.70552107871245&restaurantId=${resId}`);

          const json = await data.json();
          console.log(json);
          setResInfo(json.data);
        } catch (error) {
          console.error("Error fetching menu:", error);
        }
      };
   
    // Safely extract restaurant details
    const restaurantInfo = resInfo?.cards?.[2]?.card?.card?.info || {};
    const { name, cuisines, locality, costForTwoMessage } = restaurantInfo;
    // const newdata = resInfo?.cards[4];
    // console.log(newdata);
   
    const menuSections =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

    // if (resInfo == null) return <ShimmerCard />;
  return (
    <div className="menu">
      <h1>{name || "Restaurant Name"}</h1>
      <h2>{locality || "Location"}</h2>
      <h2>{cuisines?.join(", ") || "Cuisines not available"}</h2>
      <h2>{costForTwoMessage || "Pricing unavailable"}</h2>
      <h2>Menu</h2>

      <ul className="menu-list">
        {menuSections.map((section, sectionIndex) => {
          return section?.card?.card?.itemCards?.map((item, itemIndex) => {
            const itemInfo = item?.card?.info || {};
            return (
              <li key={itemInfo?.id || `${sectionIndex}-${itemIndex}`} className="menu-item">
                {itemInfo.imageId && (
                  <img
                    className="menu-img"
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,c_fit/${itemInfo.imageId}`}
                    alt={itemInfo.name}
                  />
                )}
                <strong>{itemInfo.name || "Item Name"}</strong>
                <h2> RS { itemInfo.price/100 || itemInfo.variantsV2.pricingModels[0].price/100}</h2>
                <p>{itemInfo.description || "No description available"}</p>
                <button className="add-button">Add</button>
              </li>
            );
          });
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;