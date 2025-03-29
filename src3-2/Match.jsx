import Date from "./MatchTime/Date";
import Day from "./MatchTime/Day";
import Game from "./MatchTeams/Game";
import Ground from "./Stadium/Ground";
import MatchLogos from "./MatchLogos/MatchLogos";
import LinkButton from "./LinkButton/LinkButton";

const Match = (props) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100px",
        display: "flex",
        alignItems: "center",
        borderBottom: "1px solid #efefef",
      }}
    >
      <Date {...props} />
      <Day {...props} />
      <MatchLogos {...props} />
      <Game {...props} />
      <Ground {...props} />
      <LinkButton {...props} />
    </div>
  );
};

export default Match;
