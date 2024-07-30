import { useState } from "react";
import SelectionButton from "../SelectionButton/SelectionButton";
import styles from "./QuizPage.module.css";

enum Answer {
  A = "A",
  B = "B",
  C = "C",
  D = "D",
}

const QuizPage = () => {
  const [answer, setAnswer] = useState<Answer | null>();
  let completedQuestions = 5;
  let totalQuestions = 10;

  const progress = (completedQuestions / totalQuestions) * 100;

  const handleSetAnswer = (e: Answer) => {
    setAnswer(e);
  };

  return (
    <div className={styles.container}>
      <p className={styles.questionProgress}>Question 1 of 10</p>
      <p className={styles.questionText}>
        This is the question itself. It tends to be a bit longer as it has to
        express the idea properly.
      </p>
      <div className={styles.progressBar}>
        <div
          className={styles.progressBarInner}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className={styles.buttonContainer}>
        <SelectionButton
          iconText="A"
          text="button"
          active={answer == Answer.A}
          onClick={() => handleSetAnswer(Answer.A)}
        />
        <SelectionButton
          iconText="B"
          text="button"
          active={answer == Answer.B}
          onClick={() => handleSetAnswer(Answer.B)}
        />
        <SelectionButton
          iconText="C"
          text="button"
          active={answer == Answer.C}
          onClick={() => handleSetAnswer(Answer.C)}
        />
        <SelectionButton
          iconText="D"
          text="button"
          active={answer == Answer.D}
          onClick={() => handleSetAnswer(Answer.D)}
        />
        <button className={styles.submitButton}>Submit Answer</button>
      </div>
    </div>
  );
};

export default QuizPage;
