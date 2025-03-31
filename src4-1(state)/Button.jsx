import { useState } from "react";

const Button = (props) => {
  // react 19버전
  // state(상태)[모양새나 값이] 변화가 일어나면 useState 사용하기
  const [num, setNum] = useState(0);

  return (
    <>
      <button
        onClick={() => {
          setNum((prev) => (prev = 10 ? prev + 1 : 0));
        }}
      >
        +
      </button>
      <span style={{ color: num > 10 ? "blue" : "black" }}>{num}</span>
      <button
        onClick={() => {
          setNum((prev) => (prev == 0 ? 0 : prev - 1));
        }}
      >
        -
      </button>
    </>
  );
};

export default Button;
