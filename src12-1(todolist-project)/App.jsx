import { useState } from "react";
import "./App.css";
import Title from "./components/Title/Title";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList/TodoList";
import CompleteList from "./components/CompleteList/CompleteList";

function App() {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  const addTodo = (newTodo) => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
    }
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    const [completedItem] = newTodos.splice(index, 1); // 해당 아이템 제거 + 추출
    setTodos(newTodos);
    setCompletedTodos([...completedTodos, completedItem]);
  };

  const deleteComplete = (index) => {
    const newCompleted = [...completedTodos];
    newCompleted.splice(index, 1);
    setCompletedTodos(newCompleted);
  };

  return (
    <div className="todolistPage">
      <Title />
      <TodoInput onAddTodo={addTodo} />
      <div style={{ display: "flex", gap: "30px" }}>
        <TodoList todos={todos} onComplete={completeTodo} />
        <CompleteList
          completedTodos={completedTodos}
          onDelete={deleteComplete}
        />
      </div>
    </div>
  );
}

export default App;
