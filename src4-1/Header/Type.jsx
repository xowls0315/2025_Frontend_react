const Type = (props) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100px",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        gap: "30px",
        fontSize: "30px",
        fontWeight: "bold",
        borderBottom: "1px solid #efefef",
      }}
    >
      <span style={{ color: "black", fontSize: "40px", marginRight: "20px" }}>
        티켓<span style={{ color: "red" }}>링크</span>
      </span>
      <span style={{ color: props.type == "공연/전시" ? "black" : "#A7ACB6" }}>
        공연/전시
      </span>
      <span style={{ color: props.type == "스포츠" ? "black" : "#A7ACB6" }}>
        스포츠
      </span>
      <span style={{ color: props.type == "여행" ? "black" : "#A7ACB6" }}>
        여행
      </span>
    </div>
  );
};

export default Type;
