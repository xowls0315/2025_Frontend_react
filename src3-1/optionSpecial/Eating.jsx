import { GiForkKnifeSpoon } from "react-icons/gi";

const Eating = (props) => {
  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <GiForkKnifeSpoon />
      <span>{props.eating}</span>
    </div>
  );
};

export default Eating;
