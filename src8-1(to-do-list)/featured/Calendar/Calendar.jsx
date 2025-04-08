import { CurrentTime } from "../../shared/util/whatTime";
import styles from "./Calendar.module.css";
import TimeText from "./components/TimeText";

const Calendar = () => {
  const [day, date, month, year] = CurrentTime();

  return (
    <div className={styles.layout}>
      {CurrentTime().map((v) => (
        <TimeText text={v} />
      ))}
    </div>
  );
};

export default Calendar;
