import React, { createContext, useState } from "react";
export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);
  const authInfo = { dark, setDark };
  return (
    <ThemeContext.Provider value={authInfo}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
