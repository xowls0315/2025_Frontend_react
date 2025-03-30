const TeamMain = (props) => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1300px",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        backgroundColor: "#000000",
        padding: "40px",
      }}
    >
      <div>
        <img src={props.teamLogo} />
      </div>
      <div
        style={{ display: "flex", flexDirection: "column", marginLeft: "40px" }}
      >
        <div style={{ color: "white", fontSize: "30px", fontWeight: " bold" }}>
          {props.team}
        </div>
        <div
          style={{
            backgroundColor: "white",
            fontSize: " 15px",
            fontWeight: "bold",
            textAlign: "center",
            borderRadius: "5px",
            width: "fit-content",
            padding: "5px 10px",
            marginTop: "30px",
          }}
        >
          예매가이드
        </div>
      </div>
    </div>
  );
};

export default TeamMain;
