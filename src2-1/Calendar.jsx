import Day2 from "./Day2";
import Date from "./Date";

const Calendar = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        alignItems: "center",
      }}
    >
      <Day2 dayNum={props.dayNum} />
      <Date date={props.date} />
    </div>
  );
};

export default Calendar;
