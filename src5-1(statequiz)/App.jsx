import { useState } from "react";
import Basket from "./Basket";

function App() {
  const [num, setNum] = useState(1);

  return (
    <>
      <Basket
        num={num}
        increase={() => {
          setNum(num + 1);
        }}
        decrease={() => {
          if (num > 1) {
            setNum(num - 1);
          }
        }}
        price={27800}
      />
    </>
  );
}

export default App;
