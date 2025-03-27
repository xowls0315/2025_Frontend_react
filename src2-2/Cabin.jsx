import { MdOutlineLuggage } from "react-icons/md";

const Cabin = () => {
  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <MdOutlineLuggage />
      <span>10KG</span>
    </div>
  );
};

export default Cabin;
