import "./app.scss";
import Sidebar from "./Components/Sidebar/Sidebar";
import Toast from "./Components/Toast/Toast";
import RadioButtons from "./Components/RadioButtonGroup/RadioButtons/RadioButtons";
import Listbox from "./Components/Listbox/Listbox";
import RadioButton from "./Components/RadioButton/RadioButton";

function App() {
  const items = ["Home", "About", "Services", "Contact"];
  const RadioButtonsArray = [
    { name: "Option 1" },
    { name: "Option 2" },
    { name: "Option 3" },
    { name: "Option 4" },
  ];
  const people = [
    { id: 1, name: "Alexa Green", unavailable: false },
    { id: 2, name: "Jordan Smith", unavailable: false },
    { id: 3, name: "Taylor Johnson", unavailable: true },
    { id: 4, name: "Morgan Bailey", unavailable: false },
    { id: 5, name: "Casey Ray", unavailable: false },
    { id: 6, name: "Jamie Parker", unavailable: true },
    { id: 7, name: "Charlie Quinn", unavailable: false },
    { id: 8, name: "Skyler Brooks", unavailable: false },
  ];
  const plans = ["Student", "Premium", "Free"];
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
      <Listbox people={people} />
      <RadioButton plans={plans} PlanHeader="Choose Plan" />
    </>
  );
}

export default App;
