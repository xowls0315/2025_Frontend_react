import Button from "../../shared/base/Button/Button";
import Input from "../../shared/base/Input/Input";
import styles from "./Add.module.css";

const Add = (props) => {
  return (
    <div className={styles.layout}>
      <Input
        inputValue={props.inputValue}
        setInputValue={props.setInputValue}
      />
      <Button text={"+"} addTask={props.addTask} />
    </div>
  );
};

export default Add;
