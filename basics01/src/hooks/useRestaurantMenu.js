import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!resId) return;

    const fetchMenu = async () => {
      try {
        const response = await fetch(
          `https://instafood.onrender.com/api/menu?lat=12.786322446615058&lng=77.70552107871245&restaurantId=${resId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch menu");
        }
        const json = await response.json();
        setResInfo(json.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, [resId]);

  return { resInfo, loading, error };
};

export default useRestaurantMenu;
