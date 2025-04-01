const Counter = (props) => {
  const [num, setNum] = useState(0);
  const buttonStyle = { padding: "10px", border: "none", fontWeight: "bold" };

  return (
    <div>
      <button
        style={{ ...buttonStyle, color: props.num == 1 ? "#efefef" : "black" }}
        onClick={() => {
          setNum((prev) => (prev == 1 ? 1 : prev - 1));
        }}
      >
        -
      </button>
      <span style={{ padding: "5px 10px", textAlign: "center" }}>{num}</span>
      <button
        style={buttonStyle}
        onClick={() => {
          setNum((prev) => prev + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
