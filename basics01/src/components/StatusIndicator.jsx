// components/StatusIndicator.jsx
// import React from "react";
// import useOnlineStatus from "../hooks/useOnlineStatus";
//  // 👈 import the CSSbasics01\src\components\ui\statusindicator.css

// const StatusIndicator = () => {
//   const isOnline = useOnlineStatus();

//   return (
//     <div className="status-container">
      
//       <span className="label">{isOnline ? "Online" : "Offline"}</span>
//     </div>
//   );
// };

// export default StatusIndicator;
// import React from "react";
// import useOnlineStatus from "../hooks/useOnlineStatus";

// const StatusIndicator = () => {
//   const isOnline = useOnlineStatus();

//   return (
//     <div style={{ fontSize: "20px" }}>
//       {isOnline ? "🟢" : "🔴"}
//     </div>
//   );
// };

// export default StatusIndicator;
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// ✅ Hook to check online status
const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const updateOnlineStatus = () => setIsOnline(navigator.onLine);
    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);
    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    };
  }, []);

  return isOnline;
};

const StatusIndicator = () => {
  const isOnline = useOnlineStatus();

  return (
    <motion.span
      className="w-3 h-3 rounded-full ml-4"
      animate={{
        opacity: [1, 0.2, 1],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        backgroundColor: isOnline ? "#22c55e" : "#ef4444", // green or red
      }}
    />
  );
};

export default StatusIndicator;
