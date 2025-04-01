import Dent from "../atom/Dent";
import Exchange from "../atom/Exchange";
import Gold from "../atom/Gold";

const Card = () => {
  return (
    <div style={{ display: "flex" }}>
      <Dent text="덴트" />
      <Gold text="판금" />
      <Exchange text="교환" />
    </div>
  );
};

export default Card;
