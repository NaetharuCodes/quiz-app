import { useState } from "react";
import styles from "./Header.module.css";
import accessabilityImg from "../../assets/icon-accessibility.svg";

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
      <button
        className={`${styles.darkModeBtn} ${isDarkMode ? styles.active : ""}`}
        onClick={toggleDarkMode}
        aria-label="Toggle dark mode"
      />
    </div>
  );
};

export default Header;
