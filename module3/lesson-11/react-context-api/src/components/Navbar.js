// src/components/Navbar.js
 import { useContext } from "react";
 import { ThemeContext } from "../context/theme.context";
 import { LanguageContext } from "../context/language.context";
import { NavLink } from "react-router-dom";
 
function Navbar() {
    const { theme, toggleTheme,  } = useContext(ThemeContext);
    const {language, languageContent} = useContext(LanguageContext)

    const {navigationContent} = languageContent[language];

  return (
    <nav className={`Navbar ${theme}`}>
      <div>
        {/* <NavLink to="/"> Home </NavLink>
        <NavLink to="/projects"> Projects </NavLink> */}
        {navigationContent.map(navButtonContent => <NavLink to="/"> {navButtonContent} </NavLink> )}
        {languageContent.theme}
        <button onClick={toggleTheme}>{theme === "light" ? "🌞": "🌙"} {theme}</button>
      </div>
    </nav>
  );
}
 
export default Navbar;