import Clock from "../atom/Clock";
import Status from "../atom/Status";
import Address from "../atom/Address";
import Option from "../atom/Option";

const Card = (props) => {
  const cardObj = {
    confirmed: "#F5FDEB",
    completed: "#F2F4F6",
    need: "#FFF5F6",
  };

  const cardStyle = {
    width: "350px",
    height: "160px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    padding: "20px",
    borderRadius: "20px",
    backgroundColor: cardObj[props.status],
  };

  return (
    <div style={cardStyle}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "25px",
        }}
      >
        <Clock clock={props.clock} />
        <Status status={props.status} />
      </div>
      <Address address={props.address} />
      <div style={{ display: "flex", gap: "10px" }}>
        {props.options.map((v) => (
          <Option status={props.status} contents={v} />
        ))}
      </div>
    </div>
  );
};

export default Card;
