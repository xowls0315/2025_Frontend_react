import "./CompleteList.css";
import Button from "@mui/material/Button";

const CompleteList = (props) => {
  return (
    <div className="completeList">
      <h2>Complete List</h2>
      <hr />
      {props.completedTodos.map((todo, index) => (
        <div key={index} className="completelist__task">
          {todo}
          <Button
            variant="outlined"
            color="error"
            onClick={() => props.onDelete(index)}
          >
            삭제
          </Button>
        </div>
      ))}
    </div>
  );
};

export default CompleteList;
