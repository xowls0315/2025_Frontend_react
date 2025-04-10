import { useState } from "react";
import Calendar from "./featured/Calendar/Calendar";
import Schedule from "./featured/schedule/Schedule";
import Layout from "./layout/Layout";
import Add from "./featured/add/Add";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTask = () => {
    // setTaskList(() => {
    //   const trimedValue = inputValue.trim();
    //   if (!trimedValue) return;
    //   else {
    //     const newPrev = [...taskList, trimedValue];
    //     setInputValue("");
    //     return newPrev;
    //   }
    // });

    if (inputValue.trim() === "") return; // 빈 문자열은 무시
    setTaskList([...taskList, inputValue]);
    setInputValue(""); // 입력창 초기화
  };

  return (
    <Layout>
      <Calendar />
      <Schedule taskList={taskList} />
      <Add
        inputValue={inputValue}
        setInputValue={setInputValue}
        addTask={addTask}
      />
      {/* 같은의미 <Button
          text={"+"}
          addTask={() => {
            addTask();
          }}
        /> */}
    </Layout>
  );
}

export default App;
