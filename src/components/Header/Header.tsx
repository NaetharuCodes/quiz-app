import styles from "./Header.module.css";
import { useTheme } from "../../contexts/ThemeContext";
import { Quiz } from "../../App";

// QUIZ ICONS
import htmlIcon from "../../assets/icon-html.svg";
import cssIcon from "../../assets/icon-css.svg";
import jsIcon from "../../assets/icon-js.svg";
import accIcon from "../../assets/icon-accessibility.svg";

// DARK MODE ICONS
import sunIcon from "../../assets/icon-sun-dark.svg";
import moonIcon from "../../assets/icon-moon-dark.svg";
import darkSun from "../../assets/icon-sun-light.svg";
import darkMoon from "../../assets/icon-moon-light.svg";

interface HeaderProps {
  activeQuiz: Quiz | null;
}

const Header = ({ activeQuiz }: HeaderProps) => {
  const { darkMode, toggleDarkMode } = useTheme();

  const quizIcon =
    activeQuiz == Quiz.HTML
      ? htmlIcon
      : activeQuiz == Quiz.CSS
      ? cssIcon
      : activeQuiz == Quiz.JS
      ? jsIcon
      : activeQuiz == Quiz.ACC
      ? accIcon
      : "";

  const iconColor =
    activeQuiz == Quiz.HTML
      ? "#FFF1E9"
      : activeQuiz == Quiz.CSS
      ? "#E0FDEF"
      : activeQuiz == Quiz.JS
      ? "#EBF0FF"
      : activeQuiz == Quiz.ACC
      ? "#F6E7FF"
      : "transparent";

  return (
    <div
      className={`flex-row justify-between items-center ${styles.container}`}
    >
      <div className="flex-row items-center justify-start">
        <div className={styles.iconContainer} style={{ background: iconColor }}>
          <img className={styles.accessabilityIcon} src={quizIcon} alt="" />
        </div>
        <p style={{ display: activeQuiz ? "" : "none" }}>{activeQuiz}</p>
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
