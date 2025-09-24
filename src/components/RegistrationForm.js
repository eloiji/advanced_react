import "./../App.css";
import { useState } from "react";
import { validateEmail } from "./../utils";

const ErrorMessage = (errorMessage) => {
  return <p className="FieldError">{errorMessage}</p>;
};

function RegistrationForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const PasswordErrorMessage = () =>
    ErrorMessage("Password should have at least 8 characters");
  const EmailErrorMessage = () =>
    ErrorMessage("Please enter a valid email address");

  const getIsFormValid = () => {
    return (
      firstName &&
      validateEmail(email) &&
      password.value.length >= 8 &&
      role !== "role"
    );
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({ value: "", isTouched: false });
    setRole("role");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    clearForm(e);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input
              placeholder="First name"
              type="input"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="Field">
            <label>Last name</label>
            <input
              placeholder="Last name"
              type="input"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input
              placeholder="Email address"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {email && !validateEmail(email) ? EmailErrorMessage() : null}
          </div>
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input
              placeholder="Password"
              type="password"
              id="password"
              onChange={(e) =>
                setPassword({ ...password, value: e.target.value })
              }
              onBlur={(e) => setPassword({ ...password, isTouched: true })}
              value={password.value}
            />
            {password.isTouched && password.value.length < 8
              ? PasswordErrorMessage()
              : null}
          </div>
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default RegistrationForm;
