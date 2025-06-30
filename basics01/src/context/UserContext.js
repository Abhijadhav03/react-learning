// /src/context/UserContext.js
import { createContext } from "react";

const UserContext = createContext({
  LoggedInUser: null,
  setLoggedInUser: () => {}, // Allow context to be updated
});

export default UserContext;
