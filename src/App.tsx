import styles from "./App.module.css";
import mbBgLight from "./assets/pattern-background-mobile-light.svg";

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.bgImageContainer}>
        <img src={mbBgLight} alt="background pattern" />
      </div>
    </div>
  );
}

export default App;
