import "./App.css";
import ManagingStates from "./components/ManagingState";
import RegistrationForm from "./components/RegistrationForm";
import Root from "./components/ThemeSettings";

function App() {
  return (
    <div className="App">
      <RegistrationForm />
      <Root />
      <ManagingStates />
    </div>
  );
}

export default App;
