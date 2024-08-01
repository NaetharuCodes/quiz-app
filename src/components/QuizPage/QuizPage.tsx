import { useState } from "react";
import SelectionButton from "../SelectionButton/SelectionButton";
import styles from "./QuizPage.module.css";
import CrossIcon from "../Icons/CrossIcon";

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
  const [hasAnswered, setHasAnswered] = useState<boolean>(false);
  const [noAnswer, setNoAnswer] = useState<boolean>(false);
  const progress = ((questionNumber + 1) / 10) * 100;

  const handleSetAnswer = (e: Answer) => {
    setAnswer(e);
  };

  const handleSubmitAnswer = () => {
    if (answer) {
      console.log("checking answer");
      setHasAnswered(true);
      setNoAnswer(false);
    } else {
      console.log("no answer set");
      setNoAnswer(true);
    }
  };

  const nextQuestion = () => {
    if (questionNumber < data.questions.length - 1) {
      setAnswer(null);
      setHasAnswered(false);
      setQuestionNumber(questionNumber + 1);
    }
  };

  if (!data || data == undefined) return null;

  return (
    <div className={styles.container}>
      <p className={styles.questionProgress}>
        Question {questionNumber + 1} of 10
      </p>
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
          disabled={hasAnswered}
          iconText="A"
          text={data.questions[questionNumber].options[0]}
          active={answer == Answer.A}
          onClick={() => handleSetAnswer(Answer.A)}
          correct={
            hasAnswered &&
            answer === Answer.A &&
            data.questions[questionNumber].options[0] ==
              data.questions[questionNumber].answer
              ? true
              : false
          }
          incorrect={
            hasAnswered &&
            answer === Answer.A &&
            data.questions[questionNumber].options[0] !=
              data.questions[questionNumber].answer
              ? true
              : false
          }
        />
        <SelectionButton
          disabled={hasAnswered}
          iconText="B"
          text={data.questions[questionNumber].options[1]}
          active={answer == Answer.B}
          onClick={() => handleSetAnswer(Answer.B)}
          correct={
            hasAnswered &&
            answer === Answer.B &&
            data.questions[questionNumber].options[1] ==
              data.questions[questionNumber].answer
              ? true
              : false
          }
          incorrect={
            hasAnswered &&
            answer === Answer.B &&
            data.questions[questionNumber].options[1] !=
              data.questions[questionNumber].answer
              ? true
              : false
          }
        />
        <SelectionButton
          disabled={hasAnswered}
          iconText="C"
          text={data.questions[questionNumber].options[2]}
          active={answer == Answer.C}
          onClick={() => handleSetAnswer(Answer.C)}
          correct={
            hasAnswered &&
            answer === Answer.C &&
            data.questions[questionNumber].options[2] ==
              data.questions[questionNumber].answer
              ? true
              : false
          }
          incorrect={
            hasAnswered &&
            answer === Answer.C &&
            data.questions[questionNumber].options[2] !=
              data.questions[questionNumber].answer
              ? true
              : false
          }
        />
        <SelectionButton
          disabled={hasAnswered}
          iconText="D"
          text={data.questions[questionNumber].options[3]}
          active={answer == Answer.D}
          onClick={() => handleSetAnswer(Answer.D)}
          correct={
            hasAnswered &&
            answer === Answer.C &&
            data.questions[questionNumber].options[3] ==
              data.questions[questionNumber].answer
              ? true
              : false
          }
          incorrect={
            hasAnswered &&
            answer === Answer.D &&
            data.questions[questionNumber].options[3] !=
              data.questions[questionNumber].answer
              ? true
              : false
          }
        />
        <SelectionButton
          icon=""
          text={hasAnswered ? "Next Question" : "Submit Answer"}
          textOnly
          buttonColor="#a729f5"
          textColor="#f4f6fa"
          iconColor="transparent"
          active={false}
          onClick={hasAnswered ? nextQuestion : handleSubmitAnswer}
        />
        <div
          className={`${styles.noAnswerAlert} ${
            noAnswer ? styles.noAnswer : ""
          }`}
        >
          <CrossIcon />
          Please select an answer
        </div>
      </div>
    </div>
  );
};

export default QuizPage;

// If chosen answer = answer, then highlight that button green
