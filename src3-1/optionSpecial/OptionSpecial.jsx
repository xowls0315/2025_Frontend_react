import Cabin from "../option/Cabin";
import Checked from "../option/Checked";
import Seat from "../option/Seat";
import Crown from "./Crown";
import Eating from "./Eating";

const OptionSpecial = (props) => {
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
      <Eating eating={props.eating} />
      <Crown crown={props.crown} />
    </div>
  );
};

export default OptionSpecial;
