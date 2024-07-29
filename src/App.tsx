import styles from "./App.module.css";
import mbBgLight from "./assets/pattern-background-mobile-light.svg";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className={styles.container}>
      {/* <div className={styles.bgImageContainer}>
        <img src={mbBgLight} alt="background pattern" />
      </div> */}
      <Header />
    </div>
  );
}

export default App;
