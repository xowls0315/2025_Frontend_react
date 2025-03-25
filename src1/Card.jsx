const Card = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "200px",
        height: "200px",
        border: "1px solid #efefef",
      }}
    >
      <div
        style={{
          flex: "1",
          backgroundColor: props.bg,
        }}
      ></div>
      <div
        style={{
          flex: "0.5",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {props.name}
        <br />
        {props.bg}
      </div>
    </div>
  );
};

export default Card;
