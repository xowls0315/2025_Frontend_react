import "./CompleteList.css";

const CompleteList = (props) => {
  return (
    <div className="completeList">
      <h2>Complete List</h2>
      <hr />
      {props.completedTodos.map((todo, index) => (
        <div key={index} className="completelist__task">
          {todo}
          <button onClick={() => props.onDelete(index)}>삭제</button>
        </div>
      ))}
    </div>
  );
};

export default CompleteList;
