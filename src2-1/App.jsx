import Kia from "./Kia";

function App() {
  {
    /* // 요일 배열
  // const dayNames = ["일", "월", "화", "수", "목", "금", "토"];
  // // 4월 1일은 화요일이므로, 시작하는 요일 인덱스는 2 (화요일)
  // const startDayIndex = 2;
  // const totalDaysInMonth = 30;
  // // days 배열을 생성
  // const days = Array.from({ length: totalDaysInMonth }, (_, index) => {
  //   const dayNum = index + 1;
  //   const dayName = dayNames[(startDayIndex + index) % 7]; // 요일을 순차적으로 계산
  //   return { dayName, dayNum: dayNum.toString() };
  // });
  // // 첫 번째 주에 일요일과 월요일 칸을 비우기 위해 빈 객체 추가
  // const firstWeekEmptyDays = [
  //   { dayName: "일", dayNum: "" },
  //   { dayName: "월", dayNum: "" },
  // ];
  // // 첫 번째 주에는 빈 칸 두 개(일요일, 월요일) 추가
  // const adjustedDays = [...firstWeekEmptyDays, ...days];
  // // 7개씩 나누기 위해 배열을 7개씩 자르는 함수
  // const weeks = [];
  // for (let i = 0; i < adjustedDays.length; i += 7) {
  //   weeks.push(adjustedDays.slice(i, i + 7));
  // }
  // return (
  //   <>
  //     {/* 각 주별로 날짜들을 렌더링 */
  }
  //     {weeks.map((week) => (
  //       <div
  //         style={{
  //           display: "flex",
  //           gap: "5px",
  //         }}
  //       >
  //         {week.map((day) => (
  //           <Day dayName={day.dayName} dayNum={day.dayNum} />
  //         ))}
  //       </div>
  //     ))}
  //   </>
  // ); */}

  {
    /* const april = Array(30)
    .fill(0)
    .map((v, i) => i + 1);

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {april.map((v) => (
        <Calendar dayNum={v % 7} date={v} />
      ))}
    </div>
  ); */
  }

  // 2025.01.01 ~ 12.31
  // new Date(2025,0,1)
  // Wed Jan 01 2025 00:00:00 GMT+0900 (한국 표준시)

  // new Date(2025,0,365)
  // Wed Dec 31 2025 00:00:00 GMT+0900 (한국 표준시)

  return <Kia></Kia>;
}
export default App;
