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
      return prev.map((row, rowIndex) => {
        if (rowIndex !== x) return row;

        // 토글: 이미 선택된 버튼이면 전체 false로
        if (row[y]) {
          return row.map(() => false);
        }

        // 새로운 선택: 해당 버튼만 true
        return row.map((_, colIndex) => colIndex === y);
      });
    });
  };

  // 각 row에서 하나씩만 true인지를 확인
  const isAllSelected = carStatuses.every((row) =>
    row.some((status) => status)
  );

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
      <LinkButton isActive={isAllSelected} />
    </div>
  );
}

export default App;
