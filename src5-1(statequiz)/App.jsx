import Item from "./Item";
{
  /*<Basket
        num={num}
        increase={() => {
          setNum(num + 1);
        }}
        decrease={() => {
          if (num > 1) {
            setNum(num - 1);
          }
        }}
        price={27800}
      />*/
}
function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Item itemPrice={55600} itemSize={"small"} />
      <Item itemPrice={20000} itemSize={"medium"} />
      <Item itemPrice={35000} itemSize={"large"} />
      <Item itemPrice={41000} itemSize={"xlarge"} />
    </div>
  );
}

export default App;
