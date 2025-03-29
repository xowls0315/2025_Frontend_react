import { IoBagHandle } from "react-icons/io5";

const Checked = (props) => {
  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <IoBagHandle />
      <span>{props.outWeight}</span>
    </div>
  );
};

export default Checked;
