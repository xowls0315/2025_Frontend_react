import { FaCrown } from "react-icons/fa";

const Crown = (props) => {
  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <FaCrown />
      <span>{props.crown}</span>
    </div>
  );
};

export default Crown;
