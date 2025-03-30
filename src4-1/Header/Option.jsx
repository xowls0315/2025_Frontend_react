const Option = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "50px",
        backgroundColor: "#F8F9FA",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ color: "#A0A5AB", fontWeight: "bold" }}>🚩 한국어 ▼</div>
      <div style={{ color: "#A0A5AB", fontWeight: "bold" }}>
        <span>
          로그인 | 예매확인/취소 | 회원가입 | 고객센터 |{" "}
          <span style={{ color: "red" }}>PAYCO</span> | 관계사 ▼
        </span>
      </div>
    </div>
  );
};

export default Option;
