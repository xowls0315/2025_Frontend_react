import { Button, List, TextField } from "@mui/material";
import { useState } from "react";
import Todo from "./Todo";

function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState(["잠자기", "유튜브보기"]);

  return (
    <>
      <TextField
        onChange={(e) => {
          setText((prev) => e.target.value);
        }}
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
      />
      <Button
        onClick={() => {
          setList((prev) => [...prev, text]);
        }}
        variant="contained"
      >
        추가
      </Button>
      <Button
        onClick={() => {
          setList((prev) => []);
        }}
        variant="contained"
      >
        리셋
      </Button>

      <nav aria-label="secondary mailbox folders">
        <List>
          {list.map((v) => (
            <Todo todo={v} />
          ))}
        </List>
      </nav>
    </>
  );
}

export default App;
