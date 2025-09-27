import "./App.css";
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
    </div>
  );
}

export default App;
