import { useParams } from "react-router-dom";
import useRestaurantMenu from "../hooks/useRestaurantMenu"; // Import custom hook
import ShimmerCard from "./Shimmer";
import Cart from "./cart";
import { useState } from "react";
import { useCart } from "../context/CartContext";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { resInfo, loading, error } = useRestaurantMenu(resId);
  const [cart, setCart] = useState([]);
  if (loading) return <ShimmerCard />;
  if (error) return <h2>Error: {error}</h2>;
    //  useEffect(() => {
    //     fetchMenu();
    //   }, [resId]); // Added resId as a dependency
    
    //   const fetchMenu = async () => {
    //     try {
    //         const data = await fetch(`https://instafood.onrender.com/api/menu?lat=12.786322446615058&lng=77.70552107871245&restaurantId=${resId}`);

    //       const json = await data.json();
    //       console.log(json);
    //       setResInfo(json.data);
    //     } catch (error) {
    //       console.error("Error fetching menu:", error);
    //     }
    //   };
   
    // Safely extract restaurant details
    const restaurantInfo = resInfo?.cards?.[2]?.card?.card?.info || {};
    const { name, cuisines, locality, costForTwoMessage } = restaurantInfo;
    // const newdata = resInfo?.cards[4];
    // console.log(newdata);
   
    const menuSections =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

    // if (resInfo == null) return <ShimmerCard />;
  
  // Function to add items to cart
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  // Function to remove item from cart
  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

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
                <button className="add-button" onClick={() => addToCart(itemInfo)}>Add</button>
 
              </li>
            );
          });
        })}
      </ul>
      <Cart cart={cart} removeItem={removeItem} />
    </div>
  );
};

export default RestaurantMenu;