import {useState, useEffect } from "react";
import ShimmerCard from "./Shimmer";

const RestaurantMenu = ()=> {

     const [resInfo , setResInfo] = useState(null);

    useEffect(() => { 
       fetchMenu();
    },[]);
    const fetchMenu = async () => {
       const data = await fetch("https://instafood.onrender.com/api/menu?lat=12.786322446615058&lng=77.70552107871245&restaurantId=15898");
       // const data = await fetch("https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.786322446615058&lng=77.70552107871245&restaurantId=397214&submitAction=ENTER");
       const json = await data.json();
        console.log(json);
        console.log("helloabhi")
        setResInfo(json.data);
        
    };
   
    // Safely extract restaurant details
    const restaurantInfo = resInfo?.cards?.[2]?.card?.card?.info || {};
    const { name, cuisines, locality, costForTwoMessage } = restaurantInfo;
    // const newdata = resInfo?.cards[4];
    // console.log(newdata);
   
    const menuSections =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

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
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${itemInfo.imageId}`}
                    alt={itemInfo.name}
                  />
                )}
                <strong>{itemInfo.name || "Item Name"}</strong>
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