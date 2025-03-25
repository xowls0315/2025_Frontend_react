const NumberButton = (props) => {
  // 화면에 숫자 0~100까지 NumberButton가 있음
  // 클릭하면 알럿으로 해당 버튼은 x번!
  // 버튼 배경색은 빨주노초파남보 싸이클링

  const color = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
  ];

  return (
    <button
      style={{
        padding: "5px 10px",
        border: "none",
        backgroundColor: color[props.num % 7],
      }}
      onClick={() => {
        alert(`해당 버튼은 ${props.num}번!`);
      }}
    >
      {props.num}
    </button>
  );
};

export default NumberButton;
