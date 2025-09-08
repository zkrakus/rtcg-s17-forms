import { useState } from "react";

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredValues, setEnteredValues] = useState({
    email: '', 
    pass: ''
  })

  function handleInputChanged(input, event) {
    setEnteredValues(prevValues => ({
      ...prevValues,
      [input] : event.target.value
    }))
  }

  function handleEmailChange(event) {
    setEnteredEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setEnteredPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault(); // Not needed for button type="button"
    console.log(enteredValues);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(event) => handleInputChanged('email', event)}
            value={enteredValues.email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) => handleInputChanged('pass', event)}
            value={enteredValues.pass}
          />
        </div>
      </div>

      <p className="form-actions">
        <button type="button" className="button button-flat">
          Reset
        </button>
        <button
          // type="button"
          className="button"
          onClick={handleSubmit}
        >
          Login
        </button>
      </p>
    </form>
  );
}
