import { useEffect } from "react";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import { useTheme } from "./contexts/ThemeContext";

const App = () => {
  const { darkMode } = useTheme();

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
      <Header />
    </div>
  );
};

export default App;
