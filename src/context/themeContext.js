import React, { useState, useLayoutEffect } from "react";
import { lightTheme, darkTheme, purpleTheme } from "../assets/constant/theme";

const ThemeContext = React.createContext({
  theme: "purpleTheme",
  toggle: () => {},
});

export default ThemeContext;

export function ThemeProvider(props) {
  // keeps state of the current theme
  const [themeName, setThemeName] = useState(false);

  // paints the app before it renders elements
  useLayoutEffect(() => {
    const lastTheme = window.localStorage.getItem("theme");
    if (lastTheme === "purpleTheme") {
      setThemeName("purpleTheme");
      applyTheme(purpleTheme);
    } else if (lastTheme === "darkTheme") {
      setThemeName("darkTheme");
      applyTheme(darkTheme);
    } else {
      setThemeName("lightTheme");
      applyTheme(lightTheme);
    }
    // if state changes, repaints the app
  }, [themeName]);

  // rewrites set of css variablels/colors
  const applyTheme = (theme) => {
    const root = document.getElementsByTagName("html")[0];
    root.style.cssText = theme.join(";");
  };

  const toggle = () => {
    let themeToSet;
    if (themeName === "purpleTheme") {
      themeToSet = "lightTheme";
    } else if (themeName === "darkTheme") {
      themeToSet = "purpleTheme";
    } else {
      themeToSet = "darkTheme";
    }
    setThemeName(themeToSet);
    window.localStorage.setItem("theme", themeToSet);
  };

  return (
    <ThemeContext.Provider
      value={{
        themeName,
        toggle,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}
