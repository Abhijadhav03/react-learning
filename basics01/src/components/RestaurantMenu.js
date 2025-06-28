import { useParams } from "react-router-dom";
import useRestaurantMenu from "../hooks/useRestaurantMenu"; // Import custom hook
import ShimmerCard from "./Shimmer";
import Cart from "./cart";
import { useState } from "react";
import { useCart } from "../context/CartContext"; // ✅ Global Cart Context
import restaurantcategory from "./restaurantcategory";  

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { resInfo, loading, error } = useRestaurantMenu(resId);
  const { cart, addItem, removeItem } = useCart(); // ✅ Use global cart functions
  const [openCategoryIndex, setOpenCategoryIndex] = useState(null); // Accordion state

  // if (resInfo == null) return <ShimmerCard />;
  if (loading) return <ShimmerCard />;
  if (error) return <h2 className="text-red-600 text-lg">Error: {error}</h2>;

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

  // ✅ Extract only item categories
  const categories = menuSections.filter(
    (c) => c?.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  ); 

  console.log(categories);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6 mb-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{name || "Restaurant Name"}</h1>
        <p className="text-gray-500">{locality || "Location"}</p>
        <p className="text-gray-500">{cuisines?.join(", ") || "Cuisines not available"}</p>
        <p className="text-gray-600 mt-2">{costForTwoMessage || "Pricing unavailable"}</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Menu</h2>

      {/* <ul className="menu-list">
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
                <button className="add-button" onClick={() => addItem(itemInfo)}>Add</button>
              </li>
            );
          });
        })}
      </ul> */}

      {categories.map((category, index) => {
        const categoryInfo = category?.card?.card;
        if (!categoryInfo?.itemCards) return null;

        const isOpen = openCategoryIndex === index;

        return (
          <div key={index} className="mb-4 border rounded-lg shadow-sm bg-white">
            <div
              className="flex justify-between items-center p-4 cursor-pointer bg-gray-100 hover:bg-gray-200 transition-all"
              onClick={() => setOpenCategoryIndex(isOpen ? null : index)}
            >
              <div>
                <h3 className="text-lg font-medium text-gray-800">{categoryInfo.title || "Category Title"}</h3>
                <p className="text-sm text-gray-500">{categoryInfo.description || ""}</p>
              </div>
              <span className="text-xl">{isOpen ? "▲" : "▼"}</span>
            </div>

            {isOpen && (
              <div className="p-4 space-y-6 animate-fadeIn">
                {categoryInfo.itemCards.map((item, itemIndex) => {
                  const itemInfo = item?.card?.info || {};
                  return (
                    <div key={itemInfo?.id || `${index}-${itemIndex}`} className="flex justify-between gap-4 border-b pb-4">
                      <div className="flex gap-4">
                        {itemInfo.imageId && (
                          <img
                            className="w-32 h-32 object-cover rounded-lg shadow-sm"
                            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,c_fit/${itemInfo.imageId}`}
                            alt={itemInfo.name}
                          />
                        )}
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800">{itemInfo.name || "Item Name"}</h4>
                          <p className="text-sm text-gray-500 mb-2">{itemInfo.description || "No description available"}</p>
                          <p className="text-gray-700 font-medium">
                            ₹{" "}
                            {itemInfo?.price
                              ? itemInfo.price / 100
                              : itemInfo?.variantsV2?.pricingModels?.[0]?.price / 100 || "N/A"}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center">
                        {/* ✅ Use global addItem */}
                        <button
                          onClick={() => addItem(itemInfo)}
                          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}

      {/* ✅ Cart Component using global state */}
      <Cart cart={cart} removeItem={removeItem} />
    </div>
  );
};

export default RestaurantMenu;


