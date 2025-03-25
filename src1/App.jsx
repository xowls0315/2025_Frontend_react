import Card from "./Card";
import NumberButton from "./NumberButton";

function App() {
  // const soccer = [
  //   {
  //     name: "손흥민",
  //     emoji: "😊",
  //     color: "pink",
  //     handleClick: () => {
  //       alert("저는 손흥민 선수입니다!");
  //     },
  //   },
  //   {
  //     name: "김민재",
  //     emoji: "👨",
  //     color: "green",
  //     handleClick: () => {
  //       console.log("저는 김민재 선수입니다!");
  //     },
  //   },
  //   {
  //     name: "이강인",
  //     emoji: "🧓",
  //     color: "red",
  //     handleClick: () => {
  //       console.log("저는 이강인 선수입니다!");
  //     },
  //   },
  // ];

  {
    /* <Welcome
        handleClick={() => {
          alert("저는 손흥민 선수입니다!");
        }}
        color={"pink"}
        name={"손흥민"}
        emoji={"😊"}
      ></Welcome>
      <Welcome
        handleClick={() => {
          console.log("저는 김민재 선수입니다!");
        }}
        color={"green"}
        name={"김민재"}
        emoji={"👨"}
      ></Welcome>
      <Welcome
        handleClick={() => {
          console.log("저는 이강인 선수입니다!");
        }}
        color={"red"}
        name={"이강인"}
        emoji={"🧓"}
      ></Welcome> */
  }
  {
    /* {soccer.map((v) => (
        <Welcome {...v}></Welcome>
      ))}
      <Button bg={"#205BF3"} br={"0px"} />
      <Button bg={"#205BF3"} br={"5px"} />
      <Button bg={"#205BF3"} br={"30px"} />
      <br />
      <Button bg={"#478DF5"} br={"0px"} />
      <Button bg={"#478DF5"} br={"5px"} />
      <Button bg={"#478DF5"} br={"30px"} /> */
  }
  {
    /* {Array(101)
        .fill(0)
        .map((v, i) => (
          <NumberButton num={i}></NumberButton>
        ))} */
  }

  const color = [
    { name: "Kia Green", bg: "#5D7D2B" },
    { name: "Kia Green_dark", bg: "#4C5B35" },
    { name: "Kia Green_variant", bg: "#589000" },
  ];

  return (
    <div style={{ display: "flex", gap: "40px" }}>
      <Card bg="#5D7D2B" name="Kia Green"></Card>
      <Card bg="#4C5B35" name="Kia Green_dark"></Card>
      <Card bg="#589000" name="Kia Green_variant"></Card>
    </div>
  );
}

export default App;
