const Size = (props) => {
  const sizeObj = {
    xsmall: "XS",
    small: "S",
    medium: "M",
    large: "L",
    xlarge: "XL",
    xxlarge: "XXL",
  };

  return (
    <span style={{ fontWeight: "bold" }}>{sizeObj[props.size] || "M"}</span>
  );
};

export default Size;
