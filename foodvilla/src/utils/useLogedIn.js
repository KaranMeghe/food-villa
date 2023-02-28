import { useState } from "react";

const useIsLogedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const toogleIsLoggedIn = () => {
    isLoggedIn === true ? setIsLoggedIn(false) : setIsLoggedIn(true);
  };
  return [isLoggedIn, toogleIsLoggedIn];
};

export default useIsLogedIn;
