import CarStatusButton from "./CarStatusButton";

const CarStatus = (props) => {
  const typeList = ["덴트", "판금", "교환"];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "300px",
        marginBottom: "30px",
      }}
    >
      <span
        style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "20px" }}
      >
        {props.title}
      </span>
      <div>
        {typeList.map((v, i) => (
          <CarStatusButton
            text={v}
            isClicked={props.statuses[i]}
            setIsClicked={() => props.clicked(props.row, i)}
          />
        ))}
      </div>
      <span style={{ margin: "20px 0px", color: "gray" }}>
        기수리 된 항목입니다.
      </span>
    </div>
  );
};

export default CarStatus;
