const Price = (props) => {
  return (
    <span style={{ fontSize: "20px", fontWeight: "bold" }}>
      {props.price * props.num}원
    </span>
  );
};

export default Price;
