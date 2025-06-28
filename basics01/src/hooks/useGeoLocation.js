// src/hooks/useGeoLocation.js
import { useState, useEffect } from "react";

const useGeoLocation = () => {
  const [location, setLocation] = useState({ lat: null, lng: null });
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (err) => {
        setError("Permission denied or unavailable");
        console.error(err);
      }
    );
  }, []);

  return { location, error };
};

export default useGeoLocation;
