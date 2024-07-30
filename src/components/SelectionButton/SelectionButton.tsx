import styles from "./SelectionButton.module.css";

interface SelectionButtonProps {
  icon?: string;
  iconText?: string;
  iconColor?: string;
  text: string;
  onClick: () => void;
  active: boolean;
}

const SelectionButton = ({
  icon,
  iconText,
  iconColor,
  text,
  onClick,
  active,
}: SelectionButtonProps) => {
  return (
    <button
      className={`flex-row items-center justify-start ${styles.button} ${
        active ? styles.activeBtn : ""
      }`}
      onClick={onClick}
    >
      <div
        className={styles.imgContainer}
        style={{ backgroundColor: iconColor ? iconColor : "" }}
      >
        {iconText ? iconText : <img src={icon} alt="button icon" />}
      </div>
      {text}
    </button>
  );
};

export default SelectionButton;
