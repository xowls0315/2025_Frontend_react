import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useState } from "react";

const Todo = (props) => {
  const [isDone, setIsDone] = useState(false);

  return (
    <ListItem disablePadding>
      <ListItemButton
        onClick={() => {
          setIsDone((prev) => !prev);
        }}
      >
        <ListItemText
          style={{ textDecoration: isDone && "line-through" }}
          primary={props.todo}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default Todo;
