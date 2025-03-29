import { MdAirlineSeatReclineExtra } from "react-icons/md";

const Seat = (props) => {
  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <MdAirlineSeatReclineExtra />
      <span>{props.seat}</span>
    </div>
  );
};

export default Seat;
