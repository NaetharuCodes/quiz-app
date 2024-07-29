import styles from "./HomeScreen.module.css";
import htmlIcon from "../../assets/icon-html.svg";
import cssIcon from "../../assets/icon-css.svg";
import jsIcon from "../../assets/icon-js.svg";
import accIcon from "../../assets/icon-accessibility.svg";
import SelectionButton from "../SelectionButton/SelectionButton";

const HomeScreen = () => {
  return (
    <>
      <h1 className={styles.title}>
        Welcome to the <span>Frontend Quiz!</span>
      </h1>
      <p className={styles.subtitle}>
        <em>Pick a subject to get started!</em>
      </p>
      <div className={styles.buttonContainer}>
        <SelectionButton
          icon={htmlIcon}
          iconColor="#FFF1E9"
          text="HTML"
          onClick={() => {}}
        />
        <SelectionButton
          icon={cssIcon}
          iconColor="#E0FDEF"
          text="CSS"
          onClick={() => {}}
        />
        <SelectionButton
          icon={jsIcon}
          iconColor="#EBF0FF"
          text="Javascript"
          onClick={() => {}}
        />
        <SelectionButton
          icon={accIcon}
          iconColor="#F6E7FF"
          text="Accessibility"
          onClick={() => {}}
        />
      </div>
    </>
  );
};

export default HomeScreen;
