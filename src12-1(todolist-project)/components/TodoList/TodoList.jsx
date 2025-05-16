import "./TodoList.css";
import Button from "@mui/material/Button";

const TodoList = (props) => {
  return (
    <div className="todoList">
      <h2>Todo List</h2>
      <hr />
      {props.todos.map((todo, index) => (
        <div key={index} className="todolist__task">
          {todo}
          <Button variant="contained" onClick={() => props.onComplete(index)}>
            완료
          </Button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
