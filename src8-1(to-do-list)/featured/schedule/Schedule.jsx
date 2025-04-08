import styles from "./Schedule.module.css";
import Task from "./components/Task";

const Schedule = () => {
  return (
    <div className={styles.layout}>
      <Task text={"유튜브보기"} />
      <Task text={"밥먹기"} />
      <Task text={"공부하기"} />
      <Task text={"운동하기"} />
      <Task text={"놀기"} />
      <Task text={"쇼핑하기"} />
    </div>
  );
};

export default Schedule;
