import React, { useCallback, useEffect, useState } from "react";
let logoutTimer;
const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

const calcRemainingTime = (expiry) => {
  const currentTime = new Date().getTime();
  const adjustedExpiryTime = new Date(expiry).getTime();
  const remaining = adjustedExpiryTime - currentTime;
  return remaining;
};

const retriveStoredToken = () => {
  const token = localStorage.getItem("token");
  const expiry = localStorage.getItem("expiry");
  const remainTime = calcRemainingTime(expiry);
  if (remainTime <= 0) {
    localStorage.removeItem("token");
    localStorage.removeItem("expiry");
    return null;
  }
  return { token, expiry };
};

export const AuthContextProvider = (props) => {
  const tokenData = retriveStoredToken();
  let initialToken;
  if (tokenData) {
    initialToken = tokenData.token;
  }
  const [token, setToken] = useState(initialToken);
  const userIsLoggedIn = !!token;

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem("expiry");
    localStorage.removeItem("token");
    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  });
  const loginHandler = (token, expiry) => {
    localStorage.setItem("token", token);
    localStorage.setItem("expiry", expiry);
    setToken(token);
    const remainingTime = calcRemainingTime(expiry);
    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };

  useEffect(() => {
    if (tokenData) {
      logoutTimer = setTimeout(logoutHandler, tokenData.expiry);
    }
  }, [tokenData, logoutHandler]);

  const contextValue = {
    token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
