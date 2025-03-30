const Area = (props) => {
  return (
    <div
      style={{
        width: "100%",
        height: "50px",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        gap: "25px",
        fontSize: "18px",
        fontWeight: "bold",
      }}
    >
      <span style={{ color: props.area == "홈" ? "red" : "black" }}>홈</span>
      <span style={{ color: props.area == "축구" ? "red" : "black" }}>
        축구
      </span>
      <span style={{ color: props.area == "야구" ? "red" : "black" }}>
        야구
      </span>
      <span style={{ color: props.area == "핸드볼" ? "red" : "black" }}>
        핸드볼
      </span>
      <span style={{ color: props.area == "아이스하키" ? "red" : "black" }}>
        아이스하키
      </span>
      <span style={{ color: props.area == "농구" ? "red" : "black" }}>
        농구
      </span>
      <span style={{ color: props.area == "배구" ? "red" : "black" }}>
        배구
      </span>
      <span style={{ color: props.area == "e스포츠&게임" ? "red" : "black" }}>
        e스포츠&게임
      </span>
      <span style={{ color: "#efefef", fontWeight: "normal" }}>|</span>
      <span style={{ color: props.area == "이벤트" ? "red" : "black" }}>
        이벤트
      </span>
      <span style={{ color: props.area == "PAYCO VIP ZONE" ? "red" : "black" }}>
        PAYCO VIP ZONE
      </span>
      <input
        type="text"
        placeholder="검색어를 입력해 주세요"
        style={{
          marginLeft: "130px",
          padding: "10px 20px",
          borderRadius: "30px",
          border: "1px solid #efefef",
          fontSize: "15px",
          fontWeight: "bold",
        }}
      />
    </div>
  );
};

export default Area;
