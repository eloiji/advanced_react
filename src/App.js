import "./App.css";
import CreateCustomHook from "./components/CreateCustomHook";
import CustomRadioGroup from "./components/CustomRadioGroup";
import FeedbackForm from "./components/FeedbackForm";
import FetchingData from "./components/FetchingData";
import ManagingStates from "./components/ManagingState";
import RegistrationForm from "./components/RegistrationForm";
import ScrollerPositionWithRenderProps from "./components/ScrollerPositionWithRenderProps";
import Root from "./components/ThemeSettings";

function App() {
  const handleSubmit = () => {
    console.log("Form submitted!");
  };

  return (
    <div className="App">
      <RegistrationForm />
      <Root />
      <ManagingStates />
      <FetchingData />
      <CreateCustomHook />
      <CustomRadioGroup />
      <ScrollerPositionWithRenderProps />
      <FeedbackForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
