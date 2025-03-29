const Price = (props) => {
  const boxStyle = {
    height: "100%",
    gap: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderTop: "1px solid gray",
    fontWeight: "bold",
  };

  if (props.seats == "0")
    return (
      <div style={boxStyle}>
        <span style={{ color: "red", fontSize: "28px" }}>매진</span>
      </div>
    );

  return (
    <div style={boxStyle}>
      <span style={{ color: "grey", fontSize: "15px" }}>{props.currency}</span>
      <span style={{ color: "black", fontSize: "24px" }}>{props.price}</span>
      <span style={{ color: "red", fontSize: "18px" }}>{props.seats}석</span>
    </div>
  );
};

export default Price;
