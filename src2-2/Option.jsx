import Cabin from "./Cabin";
import Checked from "./Checked";
import Price from "./Price";
import Seat from "./Seat";

const Option = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Seat />
      <Cabin />
      <Checked />
    </div>
  );
};

export default Option;
