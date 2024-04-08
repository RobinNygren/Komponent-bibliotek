import "./app.scss";
import Sidebar from "./Components/Sidebar/Sidebar";
import Toast from "./Components/Toast/Toast";

function App() {
  const items = ["Home", "About", "Services", "Contact"];
  return (
    <>
      <Sidebar items={items} />
      <Toast message="Error" type="error" />
      <Toast message="Success" type="success" />
      <Toast message="Info" type="info" />
    </>
  );
}

export default App;
