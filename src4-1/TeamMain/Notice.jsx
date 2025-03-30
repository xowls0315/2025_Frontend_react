const Notice = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        backgroundColor: "#F8F9FA",
        padding: "40px",
        fontWeight: "bold",
        marginBottom: "100px",
      }}
    >
      <span style={{ fontSize: "18px" }}>공지사항</span>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "50px",
          fontSize: "16px",
          color: "#B0ABA4",
        }}
      >
        <span>
          36개월 이상 미취학 아동도 반드시 개별좌석 티켓 구매하셔야 입장
          가능합니다.
        </span>
        <span>원정석을 제외한 모든 좌석은 FC서울 응원 전용구역입니다.</span>
        <span>
          경기당일 매표소를 최소화로 운영하기에 비대면 서비스인 무인발권기와
          스마트티켓을 적극 이용해주시기 바랍니다.
        </span>
      </div>
    </div>
  );
};

export default Notice;
