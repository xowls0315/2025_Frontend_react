import OptionSpecial from "./optionSpecial/OptionSpecial";
import Price from "./Price";
import Title from "./Title";

const ClassSpecialType = (props) => {
  return (
    <div
      style={{
        width: "250px",
        height: "400px",
        display: "flex",
        flexDirection: "column",
        border: "1px solid gray",
      }}
    >
      <Title {...props} />
      <OptionSpecial {...props} />
      <Price {...props} />
    </div>
  );
};

export default ClassSpecialType;
