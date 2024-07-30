import { useState } from "react";
import SelectionButton from "../SelectionButton/SelectionButton";
import styles from "./QuizPage.module.css";

enum Answer {
  A = "A",
  B = "B",
  C = "C",
  D = "D",
}

interface QuizPageProps {
  data: any;
}

const QuizPage = ({ data }: QuizPageProps) => {
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const [answer, setAnswer] = useState<Answer | null>();
  let completedQuestions = 2;
  let totalQuestions = 10;

  console.log("data is...", data?.questions[questionNumber].question);

  const progress = (completedQuestions / totalQuestions) * 100;

  const handleSetAnswer = (e: Answer) => {
    setAnswer(e);
  };

  const nextQuestion = () => {
    if (questionNumber < data.questions.length)
      setQuestionNumber(questionNumber + 1);
  };

  if (!data || data == undefined) return null;

  return (
    <div className={styles.container}>
      <p className={styles.questionProgress}>Question 1 of 10</p>
      <p className={styles.questionText}>
        {data.questions[questionNumber].question}
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
          text={data.questions[questionNumber].options[0]}
          active={answer == Answer.A}
          onClick={() => handleSetAnswer(Answer.A)}
        />
        <SelectionButton
          iconText="B"
          text={data.questions[questionNumber].options[1]}
          active={answer == Answer.B}
          onClick={() => handleSetAnswer(Answer.B)}
        />
        <SelectionButton
          iconText="C"
          text={data.questions[questionNumber].options[2]}
          active={answer == Answer.C}
          onClick={() => handleSetAnswer(Answer.C)}
        />
        <SelectionButton
          iconText="D"
          text={data.questions[questionNumber].options[3]}
          active={answer == Answer.D}
          onClick={() => handleSetAnswer(Answer.D)}
        />
        <SelectionButton
          icon=""
          text="Button"
          textOnly
          buttonColor="#a729f5"
          textColor="#f4f6fa"
          iconColor="transparent"
          active={false}
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default QuizPage;
