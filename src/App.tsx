import "./app.scss";
import Sidebar from "./Components/Sidebar/Sidebar";
import Toast from "./Components/Toast/Toast";
import RadioButtons from "./Components/RadioButtonGroup/RadioButtons/RadioButtons";

function App() {
  const items = ["Home", "About", "Services", "Contact"];
  const RadioButtonsArray = [
    { name: "Option 1" },
    { name: "Option 2" },
    { name: "Option 3" },
    { name: "Option 4" },
  ];
  return (
    <>
      <Sidebar items={items} />
      <Toast message="Error" type="error" />
      <Toast message="Success" type="success" />
      <Toast message="Info" type="info" />
      <RadioButtons
        FormHeader="Radio Group"
        optionsArray={RadioButtonsArray}
      />{" "}
    </>
  );
}

export default App;
