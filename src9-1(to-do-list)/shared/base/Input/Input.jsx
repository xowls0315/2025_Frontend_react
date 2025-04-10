import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={styles.inputBox}>
      <input
        type="text"
        value={props.inputValue}
        onChange={(e) => props.setInputValue(e.target.value)}
        className={styles.input}
      />
    </div>
  );
};

export default Input;
