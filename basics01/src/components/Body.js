import RestaurantCard, { withExtraInfo } from "./RestaurantCard";
import { resobj } from "../utils/constants";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import ShimmerCard from "./Shimmer";
import { motion, AnimatePresence } from "framer-motion";
import useGeoLocation from "../hooks/useGeoLocation"; // ✅ Custom hook to get user location

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [originalRestaurants, setOriginalRestaurants] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  const { location, error: locationError } = useGeoLocation(); // ✅ Use geo location

  // if the dependency array is empty = [] => useEffect is called on initial render not again and again
  // if no dependency array  => useEffect is called on every render
  // whenever state variables update, react triggers a reconciliation cycle (re-renders the components)
  useEffect(() => {
    console.log("useEffect called");
    if (location.lat && location.lng) {
      fetchData(location.lat, location.lng);
    } else {
      // fallback to default location (Bangalore)
      fetchData(12.786322446615058, 77.70552107871245);
    }
  }, [location]);

  console.log("Body Rendered");

  const RestaurantCardWithExtraInfo = withExtraInfo(RestaurantCard);

  // ✅ Function to remove duplicate restaurants based on ID
  const uniqueById = (arr) => {
    const seen = new Set();
    return arr.filter((item) => {
      const id = item.info.id;
      if (seen.has(id)) return false;
      seen.add(id);
      return true;
    });
  };

  const fetchData = async (lat, lng) => {
    try {
      const response = await fetch(
        `https://instafood.onrender.com/api/restaurants?lat=${lat}&lng=${lng}`
      );
      const json = await response.json();

      const restaurants1 =
        json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants || [];
      const restaurants4 =
        json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants || [];

      console.log("hello");

      const combinedRestaurants = [...restaurants1, ...restaurants4];
      console.log("Combined Restaurants:", combinedRestaurants);

      // ✅ Remove duplicates by ID
      const uniqueRestaurants = uniqueById(combinedRestaurants);
      console.log("Unique Restaurants:", uniqueRestaurants);

      setRestaurants(uniqueRestaurants);
      setOriginalRestaurants(uniqueRestaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = () => {
    const filteredRestaurants = filterData(searchText, originalRestaurants);
    setRestaurants(filteredRestaurants);
    setIsFiltered(false);
  };

  const filterData = (searchText, restaurants) => {
    return restaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  const toggleTopRated = () => {
    if (isFiltered) {
      setRestaurants(originalRestaurants);
    } else {
      const filteredRestaurants = originalRestaurants.filter(
        (res) => parseFloat(res.info.avgRating) > 4.5
      );
      setRestaurants(filteredRestaurants);
    }
    setIsFiltered(!isFiltered);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus == false)
    return <h1>Looks like you are offline</h1>;

  return (
    <div className="body px-6 py-4">
      {/* <div className='search' >
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search a restaurant you want..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            const data = filterData(searchText, initialResobj);
                            setRestaurants(data);
                        }
                    }}
                />
                <button
                    className="search-btn"
                    onClick={() => {
                        const data = filterData(searchText, initialResobj);
                        setRestaurants(data);
                    }}
                >
                    Search
                </button>
            </div> */}

      {/* ✅ Search & Filter */}
      <div className="search mb-6">
        <input
          type="text"
          className="search-input"
          placeholder="Search a restaurant you want..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>

      <button
        className="bg-gray-100 px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-200 transition text-sm mb-6"
        onClick={toggleTopRated}
      >
        {isFiltered ? "Show All Restaurants" : "Top Rated Restaurant"}
      </button>

      {/* ✅ Restaurant Cards or Skeleton */}
      <div className="restaurant-container flex flex-wrap gap-6">
        {isLoading
          ? Array.from({ length: 9 }).map((_, index) => (
              <ShimmerCard key={index} />
            ))
          : (
            <AnimatePresence>
              {restaurants.map((restaurant) => (
                <motion.div
                  key={restaurant.info.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link to={`/restaurants/${restaurant.info.id}`}>
                    <RestaurantCardWithExtraInfo resData={restaurant} />
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          )}
      </div>
    </div>
  );
};

export default Body;



//- monolithic architecture
//--2. microservices
//2.API - loads -API - RENDER
//3. Loads - render - api - render again // this is good for react //
//4. 