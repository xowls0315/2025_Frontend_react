import { Button, TextField } from "@mui/material";

function App() {
  return (
    <>
      <TextField onChange={(e) => console.log(e.target.value)}></TextField>
      <Button variant="contained">Contained</Button>
    </>
  );
}

export default App;
