const Day = (props) => {
  return (
    <div style={{ marginLeft: "10px" }}>
      <div style={{ color: props.day == "(일)" ? "red" : "gray" }}>
        {props.day}
      </div>
      <div style={{ color: "gray" }}>{props.time}</div>
    </div>
  );
};

export default Day;
