import Area from "./Header/Area";
import Option from "./Header/Option";
import Type from "./Header/Type";

const Header = (props) => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1300px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Option />
      <Type {...props} />
      <Area {...props} />
    </div>
  );
};

export default Header;
