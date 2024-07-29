import styles from "./SelectionButton.module.css";

interface SelectionButtonProps {
  icon: string;
  iconColor?: string;
  text: string;
  onClick: () => void;
}

const SelectionButton = ({
  icon,
  iconColor = "black",
  text,
  onClick,
}: SelectionButtonProps) => {
  return (
    <button
      className={`flex-row items-center justify-start ${styles.button}`}
      onClick={onClick}
    >
      <div
        className={styles.imgContainer}
        style={{ backgroundColor: iconColor }}
      >
        <img src={icon} alt="button icon" />
      </div>
      {text}
    </button>
  );
};

export default SelectionButton;
