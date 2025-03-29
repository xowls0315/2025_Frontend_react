import Cabin from "./Cabin";
import Checked from "./Checked";
import Seat from "./Seat";

const Option = (props) => {
  const boxStyle = {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };

  return (
    <div style={boxStyle}>
      <Seat seat={props.seat} />
      <Cabin inWeight={props.inWeight} />
      <Checked outWeight={props.outWeight} />
    </div>
  );
};

export default Option;
