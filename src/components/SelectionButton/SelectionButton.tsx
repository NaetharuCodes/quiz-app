import styles from "./SelectionButton.module.css";

interface SelectionButtonProps {
  icon?: string;
  iconText?: string;
  iconColor?: string;
  text: string;
  onClick: () => void;
  active: boolean;
  textOnly?: boolean;
  buttonColor?: string;
  textColor?: string;
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
}: SelectionButtonProps) => {
  return (
    <button
      className={`flex-row items-center ${
        textOnly ? "justify-center" : "justify-start"
      } ${styles.button} ${active && styles.activeBtn}`}
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
