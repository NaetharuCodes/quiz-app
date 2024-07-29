import styles from "./Header.module.css";
import accessabilityImg from "../../assets/icon-accessibility.svg";
import sunIcon from "../../assets/icon-sun-dark.svg";
import moonIcon from "../../assets/icon-moon-dark.svg";
import darkSun from "../../assets/icon-sun-light.svg";
import darkMoon from "../../assets/icon-moon-light.svg";
import { useTheme } from "../../contexts/ThemeContext";

const Header = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div
      className={`flex-row justify-between items-center ${styles.container}`}
    >
      <div className="flex-row items-center justify-start">
        <div className={styles.iconContainer}>
          <img
            className={styles.accessabilityIcon}
            src={accessabilityImg}
            alt="accessability icon"
          />
        </div>
        <p>Accessibility</p>
      </div>
      <div className="flex-row items-center justify-between">
        <img src={darkMode ? darkSun : sunIcon} alt="sun icon" />
        <button
          className={`${styles.darkModeBtn} ${darkMode ? styles.active : ""}`}
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
        />
        <img src={darkMode ? darkMoon : moonIcon} alt="moon icon" />
      </div>
    </div>
  );
};

export default Header;
