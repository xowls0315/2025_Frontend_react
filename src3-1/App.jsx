import ClassSpecialType from "./ClassSpecialType";
import ClassType from "./ClassType";

function App() {
  const ticket = [
    {
      type: "이벤트운임",
      seat: "이코노미 좌석",
      inWeight: "10KG",
      outWeight: "없음",
      seats: "0",
      bg: "#C4E8D1",
    },
    {
      type: "스마트운임",
      seat: "이코노미 좌석",
      inWeight: "10KG",
      outWeight: "15KG",
      currency: "KRW",
      price: "237,000",
      seats: "9",
      bg: "#C4E8D1",
    },
    {
      type: "일반운임",
      seat: "이코노미 좌석",
      inWeight: "10KG",
      outWeight: "20KG",
      currency: "KRW",
      price: "237,000",
      seats: "9",
      bg: "#C4E8D1",
    },
    {
      type: "비즈니스 운임",
      seat: "프리미엄 플랫 좌석",
      inWeight: "10KG X 2PCS",
      outWeight: "30KG",
      eating: "1회 제공",
      crown: "무료제공",
      currency: "KRW",
      price: "237,000",
      seats: "9",
      bg: "red",
    },
  ];

  return (
    <div style={{ display: "flex" }}>
      {ticket.map((v, i) =>
        v.eating && v.crown ? (
          <ClassSpecialType key={i} {...v} />
        ) : (
          <ClassType key={i} {...v} />
        )
      )}
    </div>
  );
}

export default App;
