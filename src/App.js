import "./App.css";
import CreateCustomHook from "./components/CreateCustomHook";
import CustomRadioGroup from "./components/CustomRadioGroup";
import FetchingData from "./components/FetchingData";
import ManagingStates from "./components/ManagingState";
import RegistrationForm from "./components/RegistrationForm";
import Root from "./components/ThemeSettings";

function App() {
  return (
    <div className="App">
      <RegistrationForm />
      <Root />
      <ManagingStates />
      <FetchingData />
      <CreateCustomHook />
      <CustomRadioGroup />
    </div>
  );
}

export default App;
