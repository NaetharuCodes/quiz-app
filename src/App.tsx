import { useEffect, useState } from "react";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import { useTheme } from "./contexts/ThemeContext";
import HomeScreen from "./components/HomeScreen/HomeScreen";

export enum Quiz {
  HTML = "HTML",
  CSS = "CSS",
  JS = "Javascript",
  ACC = "Accessability",
}

const App = () => {
  const { darkMode } = useTheme();
  const [activeQuiz, setActiveQuiz] = useState<Quiz | null>(null);

  useEffect(() => {
    console.log(darkMode);

    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div className={styles.container}>
      <Header activeQuiz={activeQuiz} />
      <div className={styles.contentContainer}>
        <HomeScreen />
      </div>
    </div>
  );
};

export default App;
