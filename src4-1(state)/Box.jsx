import { useState } from "react";

const Box = () => {
  const [boxColor, setBoxColor] = useState("white");

  return (
    <>
      <button
        onClick={() => {
          setBoxColor((prev) => "green");
        }}
      >
        초록
      </button>
      <button
        onClick={() => {
          setBoxColor((prev) => "yellow");
        }}
      >
        노랑
      </button>
      <button
        onClick={() => {
          setBoxColor((prev) => "red");
        }}
      >
        빨강
      </button>
      <br />
      <br />
      <div
        style={{
          width: "100px",
          height: "100px",
          border: "1px solid black",
          backgroundColor: boxColor,
        }}
      ></div>
    </>
  );
};

export default Box;
