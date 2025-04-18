import "./TodoInput.css";
import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

const TodoInput = (props) => {
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    props.onAddTodo(inputValue);
    setInputValue(""); // 등록 후 초기화
  };
  return (
    <div className="todoinput">
      <Stack
        component="form"
        sx={{ width: "700px" }}
        spacing={2}
        noValidate
        autoComplete="off"
      >
        <TextField
          hiddenLabel
          id="filled-hidden-label-normal"
          defaultValue="할 일을 입력하세요."
          variant="filled"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button
          className="input__btn"
          variant="contained"
          color="success"
          onClick={handleAdd}
        >
          +
        </Button>
      </Stack>
    </div>
  );
};

export default TodoInput;
