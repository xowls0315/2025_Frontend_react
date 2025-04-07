import styles from "./Calendar.module.css";
import Text from "./components/Text";

const Calendar = () => {
  const [day, date, month, year] = new Date().toUTCString().split(" ");

  return (
    <div className={styles.layout}>
      <Text text={`${day} ${date} ${month} ${year}`} />
    </div>
  );
};

export default Calendar;
