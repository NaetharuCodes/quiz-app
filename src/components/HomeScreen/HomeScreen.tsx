import styles from "./HomeScreen.module.css";
import htmlIcon from "../../assets/icon-html.svg";
import cssIcon from "../../assets/icon-css.svg";
import jsIcon from "../../assets/icon-js.svg";
import accIcon from "../../assets/icon-accessibility.svg";
import SelectionButton from "../SelectionButton/SelectionButton";
import { Quiz } from "../../App";

interface HomeScreenProps {
  setActiveQuiz: (quiz: Quiz) => void;
}

const HomeScreen = ({ setActiveQuiz }: HomeScreenProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          Welcome to the <span>Frontend Quiz!</span>
        </h1>
        <p className={styles.subtitle}>
          <em>Pick a subject to get started!</em>
        </p>
      </div>
      <div className={styles.buttonContainer}>
        <SelectionButton
          icon={htmlIcon}
          iconColor="#FFF1E9"
          text="HTML"
          onClick={() => setActiveQuiz(Quiz.HTML)}
        />
        <SelectionButton
          icon={cssIcon}
          iconColor="#E0FDEF"
          text="CSS"
          onClick={() => setActiveQuiz(Quiz.CSS)}
        />
        <SelectionButton
          icon={jsIcon}
          iconColor="#EBF0FF"
          text="Javascript"
          onClick={() => setActiveQuiz(Quiz.JS)}
        />
        <SelectionButton
          icon={accIcon}
          iconColor="#F6E7FF"
          text="Accessibility"
          onClick={() => setActiveQuiz(Quiz.ACC)}
        />
      </div>
    </div>
  );
};

export default HomeScreen;
