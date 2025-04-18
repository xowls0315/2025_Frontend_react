import "./TodoList.css";

const TodoList = (props) => {
  return (
    <div className="todoList">
      <h2>Todo List</h2>
      <hr />
      {props.todos.map((todo, index) => (
        <div key={index} className="todolist__task">
          {todo}
          <button onClick={() => props.onComplete(index)}>완료</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
