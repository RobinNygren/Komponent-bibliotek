import "./app.scss";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  const items = ["Home", "About", "Services", "Contact"];
  return (
    <>
      <Sidebar items={items} />
    </>
  );
}

export default App;
