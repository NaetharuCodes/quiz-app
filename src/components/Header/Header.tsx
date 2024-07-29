import { useState } from "react";
import styles from "./Header.module.css";
import accessabilityImg from "../../assets/icon-accessibility.svg";
import sunIcon from "../../assets/icon-sun-dark.svg";
import moonIcon from "../../assets/icon-moon-dark.svg";
import darkSun from "../../assets/icon-sun-light.svg";
import darkMoon from "../../assets/icon-moon-light.svg";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`flex-row justify-between items-center ${styles.container}`}
    >
      <div className="flex-row items-center justify-start">
        <img
          className={styles.accessabilityIcon}
          src={accessabilityImg}
          alt="accessability icon"
        />
        <p>Accessibility</p>
      </div>
      <div className="flex-row items-center justify-between">
        <img src={isDarkMode ? darkSun : sunIcon} alt="sun icon" />
        <button
          className={`${styles.darkModeBtn} ${isDarkMode ? styles.active : ""}`}
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
        />
        <img src={isDarkMode ? darkMoon : moonIcon} alt="moon icon" />
      </div>
    </div>
  );
};

export default Header;
