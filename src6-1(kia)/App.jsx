//featured
import { useState } from "react";
import CarStatus from "./featured/carstatus/CarStatus";
import LinkButton from "./featured/linkbutton/LinkButton";

function App() {
  const [carStatuses, setCarStatuses] = useState([
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ]);

  const click = (x, y) => {
    setCarStatuses((prev) => {
      // const newPrev = prev;
      // newPrev[x][y] = !newPrev[x][y];
      // return newPrev;

      const newPrev = [...prev].map((v) => {
        ksdfngkldfndfglk;
      });
    });
  };

  return (
    <div
      style={{
        backgroundColor: "#F5FDEB",
        padding: "30px",
        width: "fit-content",
      }}
    >
      <CarStatus
        title={"후드"}
        statuses={carStatuses[0]}
        clicked={click}
        row={0}
      />
      <CarStatus
        title={"프론트펜더(Left)"}
        statuses={carStatuses[1]}
        clicked={click}
        row={1}
      />
      <CarStatus
        title={"프론트펜더(Right)"}
        statuses={carStatuses[2]}
        clicked={click}
        row={2}
      />
      <LinkButton />
    </div>
  );
}

export default App;
