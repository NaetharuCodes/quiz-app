import { useEffect, useState } from "react";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import { useTheme } from "./contexts/ThemeContext";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import data from "./data/data.json";
import QuizPage from "./components/QuizPage/QuizPage";

export enum Quiz {
  HTML = "HTML",
  CSS = "CSS",
  JS = "Javascript",
  ACC = "Accessibility",
}

const App = () => {
  const { darkMode } = useTheme();
  const quizData: any = data.quizzes;
  const [activeQuiz, setActiveQuiz] = useState<Quiz | null>(null);
  const [activeQuizData, setActiveQuizData] = useState<any>("");

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  useEffect(() => {
    const matchingQuiz = quizData.find((obj: any) => obj.title === activeQuiz);
    setActiveQuizData(matchingQuiz);
    console.log(activeQuiz);
  }, [activeQuiz]);

  const handleResetQuiz = () => {
    setActiveQuiz(null);
  };

  return (
    <div className={styles.container}>
      <Header activeQuiz={activeQuiz} reset={handleResetQuiz} />
      <div className={styles.contentContainer}>
        {activeQuiz ? (
          <QuizPage data={activeQuizData} resetQuiz={handleResetQuiz} />
        ) : (
          <HomeScreen setActiveQuiz={setActiveQuiz} />
        )}
      </div>
    </div>
  );
};

export default App;
