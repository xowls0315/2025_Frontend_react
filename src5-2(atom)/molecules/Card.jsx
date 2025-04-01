import Clock from "../atom/Clock";
import State from "../atom/State";
import Address from "../atom/Address";
import Option from "../atom/Option";

const Card = (props) => {
  const cardStyle = {
    width: "320px",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "ivory",
    padding: "20px",
    borderRadius: "20px",
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
        <Clock clock="오전 10:00" />
        <State />
      </div>
      <Address address="서울특별시 서초구 양재동 헌릉로 12 현대 기아자동차빌딩" />
      <Option option="비대면" />
    </div>
  );
};

export default Card;
