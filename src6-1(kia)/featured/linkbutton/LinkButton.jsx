const LinkButton = (props) => {
  const activeStyle = {
    width: "200px",
    padding: "10px",
    backgroundColor: "black",
    color: "white",
    borderRadius: "10px",
    fontSize: "16px",
    fontWeight: "bold",
  };

  const inactiveStyle = {
    ...activeStyle,
    backgroundColor: "white",
    color: "black",
  };

  return (
    <button style={props.isActive ? activeStyle : inactiveStyle}>확인</button>
  );
};

export default LinkButton;
