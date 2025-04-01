const Option = (props) => {
  const optionStyle = {
    color: "gray",
    padding: "5px 15px",
    borderRadius: "20px",
    backgroundColor: "#efefef",
    width: "fit-content",
  };

  return <div style={optionStyle}>{props.option}</div>;
};

export default Option;
