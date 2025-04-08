import Calendar from "./featured/Calendar/Calendar";
import Schedule from "./featured/schedule/Schedule";
import Layout from "./layout/Layout";
import Button from "./shared/base/Button/Button";

function App() {
  return (
    <Layout>
      <Calendar />
      <Schedule />
      <input type="text" />
      <Button text={"+"} />
    </Layout>
  );
}

export default App;
