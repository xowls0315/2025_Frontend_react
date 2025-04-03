const Counter = (props) => {
  const buttonStyle = {
    padding: "10px",
    border: "none",
    fontWeight: "bold",
    backgroundColor: "white",
  };

  return (
    <div
      style={{
        border: "1px solid #efefef",
        width: "fit-content",
        display: "flex",
      }}
    >
      <button
        style={{
          ...buttonStyle,
          color: props.num == 1 ? "#e8e8e8" : "black",
        }}
        onClick={() => {
          props.setNum(props.num == 1 ? 1 : props.num - 1);
        }}
      >
        -
      </button>
      <span
        style={{
          padding: "5px 10px",
          textAlign: "center",
          backgroundColor: "white",
        }}
      >
        {props.num}
      </span>
      <button
        style={buttonStyle}
        onClick={() => {
          props.setNum(props.num + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
