import Option from "./option/Option";
import Price from "./Price";
import Title from "./Title";

const ClassType = (props) => {
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
      <Option {...props} />
      <Price {...props} />
    </div>
  );
};

export default ClassType;
