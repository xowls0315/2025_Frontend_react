const MatchTime = (props) => {
  return (
    <div style={{ display: "flex", gap: "2px" }}>
      <div style={{ fontSize: "20px" }}>{props.date}</div>
      <div>
        <span style={{ fontSize: "10px" }}>{props.day}</span>
        <span style={{ fontSize: "10px" }}>{props.time}</span>
      </div>
    </div>
  );
};

export default MatchTime;
