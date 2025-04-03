import { useState } from "react";
import Counter from "./Counter";
import Price from "./Price";
import Size from "./Size";

const Item = (props) => {
  const [num, setNum] = useState(1);
  return (
    <div
      style={{
        width: "300px",
        borderRadius: "10px",
        padding: "20px",
        backgroundColor: "#f5f5f5",
        display: "flex",
        flexDirection: "column",
        gap: "50px",
      }}
    >
      <Size size={props.itemSize} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Counter num={num} setNum={setNum} />
        <Price price={props.itemPrice} num={num} />
      </div>
    </div>
  );
};

export default Item;
