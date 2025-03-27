const Day = (props) => {
  // 토요일, 일요일은 색상을 다르게 설정
  const isWeekend = props.dayName === "토" || props.dayName === "일";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100px",
        height: "150px",
        border: "1px solid black",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          flex: "0.5",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bold",
          fontSize: "20px",
          color: isWeekend
            ? props.dayName === "토"
              ? "blue"
              : "red"
            : "black",
        }}
      >
        {props.dayName}
      </div>
      <div
        style={{
          flex: "1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bold",
          fontSize: "35px",
          color: isWeekend
            ? props.dayName === "토"
              ? "blue"
              : "red"
            : "black",
        }}
      >
        {props.dayNum}
      </div>
    </div>
  );
};

export default Day;
