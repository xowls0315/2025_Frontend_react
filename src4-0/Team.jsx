import Notice from "./TeamMain/Notice";
import Reservation from "./TeamMain/Reservation";
import TeamMain from "./TeamMain/TeamMain";

const Team = (props) => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1300px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TeamMain {...props} />
      <Notice />
      <Reservation />
    </div>
  );
};

export default Team;
