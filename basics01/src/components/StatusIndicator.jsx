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
import React from "react";
import useOnlineStatus from "../hooks/useOnlineStatus";

const StatusIndicator = () => {
  const isOnline = useOnlineStatus();

  return (
    <div style={{ fontSize: "20px" }}>
      {isOnline ? "🟢" : "🔴"}
    </div>
  );
};

export default StatusIndicator;
