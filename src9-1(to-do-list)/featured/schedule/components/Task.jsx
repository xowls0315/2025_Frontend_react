import { useState } from "react";
import styles from "./Task.module.css";
import TaskText from "./TaskText";
import CheckBox from "../../../shared/base/CheckBox/CheckBox";

const Task = (props) => {
  const [isCheck, setIsCheck] = useState(false);

  return (
    <div className={styles.layout}>
      <TaskText text={props.text} state={isCheck ? "clear" : "unclear"} />
      <CheckBox setIsCheck={setIsCheck} />
    </div>
  );
};

export default Task;
