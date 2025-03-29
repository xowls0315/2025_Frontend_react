import { FaExclamationCircle } from "react-icons/fa";

const Title = (props) => {
  const boxStyle = {
    padding: "20px",
    fontSize: "20px",
    textAlign: "center",
    fontWeight: "bold",
    borderBottom: "1px solid gray",
    backgroundColor: props.bg,
  };

  return (
    <div style={boxStyle}>
      {props.type}
      <FaExclamationCircle
        style={{
          marginLeft: "5px",
          borderRadius: "9999px",
          color: "gray",
        }}
      />
    </div>
  );
};

export default Title;
