import styles from "./Content.module.css";

const Content = (props) => {
  return (
    <section className={styles.content}>
      <div>{props.todolist}</div>
    </section>
  );
};

export default Content;
