const CarStatusButton = (props) => {
  const buttonStyle = {
    padding: "15px 30px",
    border: "1px solid green",
    backgroundColor: props.isClicked ? "black" : "white",
    fontWeight: "bold",
    fontSize: "16px",
    color: props.isClicked ? "white" : "black",
  };

  return (
    <button
      style={buttonStyle}
      onClick={() => {
        props.setIsClicked();
      }}
    >
      {props.text}
    </button>
  );
};

export default CarStatusButton;
