import { MdOutlineLuggage } from "react-icons/md";

const Cabin = (props) => {
  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <MdOutlineLuggage />
      <span>{props.inWeight}</span>
    </div>
  );
};

export default Cabin;
