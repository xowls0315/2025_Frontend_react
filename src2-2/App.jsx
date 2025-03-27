import Card from "./Card";
import Option from "./Option";
import Price from "./Price";
import Title from "./Title";

function App() {
  const ticket = [
    {
      type: "이벤트운임",
      seat: "이코노미 좌석",
      inWeight: "10KG",
      outWeight: "없음",
      price: "매진",
    },
  ];

  return (
    <>
      <Title />
      <Option />
      <Price />
    </>
  );
}

export default App;
