import { createContext, useState, useEffect } from "react";
import { auth } from "../firebase";

export const AppContext = createContext<any>(false);

export const AppProvider = (props: any) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);
  const [location, setLocation] = useState<{ lat: Number; lng: Number } | null>(
    null
  );

  useEffect(() => {
    if (auth.currentUser !== null) {
      setIsUserLoggedIn(true);
    } else {
      setIsUserLoggedIn(false);
    }
  }, [auth.currentUser]);

  return (
    <AppContext.Provider
      value={{
        isUserLoggedIn,
        setIsUserLoggedIn,
        location,
        setLocation,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
