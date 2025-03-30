const LinkButton = (props) => {
  return (
    <div
      style={{
        padding: "10px 30px",
        marginLeft: "100px",
        backgroundColor: "#efefef",
        borderRadius: "10px",
        width: "fit-contents",
        display: "flex",
        flexDirection: "column",
        fontWeight: "bold",
      }}
    >
      <span>{props.openDate}</span>
      <span>{props.openTime}</span>
    </div>
  );
};

export default LinkButton;
