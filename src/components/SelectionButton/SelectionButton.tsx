import styles from "./SelectionButton.module.css";

interface SelectionButtonProps {
  icon?: string;
  iconText?: string;
  iconColor?: string;
  text: string;
  onClick: () => void;
  active?: boolean;
  textOnly?: boolean;
  buttonColor?: string;
  textColor?: string;
  correct?: boolean;
  incorrect?: boolean;
  disabled?: boolean;
}

const SelectionButton = ({
  icon,
  iconText,
  iconColor,
  text,
  onClick,
  active,
  textOnly,
  buttonColor,
  textColor,
  incorrect,
  correct,
  disabled,
}: SelectionButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={`flex-row items-center ${
        textOnly ? "justify-center" : "justify-start"
      } ${styles.button} ${active && styles.activeBtn} ${
        correct ? styles.correct : incorrect ? styles.false : ""
      }`}
      style={{
        backgroundColor: buttonColor && buttonColor,
        color: textColor && textColor,
      }}
      onClick={onClick}
    >
      {!textOnly && (
        <div
          className={styles.imgContainer}
          style={{
            backgroundColor: iconColor ? iconColor : "",
            justifyContent: textOnly ? "center" : "",
          }}
        >
          {iconText ? iconText : <img src={icon} alt="" />}
        </div>
      )}
      {text}
    </button>
  );
};

export default SelectionButton;
