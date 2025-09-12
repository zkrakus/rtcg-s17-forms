import { useState } from "react";
import Input from "./Input";

export default function StateLogin() {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredValues, setEnteredValues] = useState({
    email: {
      value: "",
      didEdit: false,
    },
    pass: {
      value: "",
      didEdit: false,
    },
  });

  const emailIsInvalid =
    didEdit.email && !enteredValues.email.value.includes("@");

  // function handleEmailChange(event) {
  //   setEnteredEmail(event.target.value);
  // }

  // function handlePasswordChange(event) {
  //   setEnteredPassword(event.target.value);
  // }

  function handleSubmit(event) {
    event.preventDefault(); // Not needed for button type="button"

    // Be sure to add input validation here as well.

    console.log(enteredValues);
  }

  function handleInputChanged(input, event) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [input]: {
        value: event.target.value,
        didEdit: false,
      },
    }));
  }

  function handleInputBlur(identifier) {
    setEnteredValues((prevValues) => {
      return {
        ...prevValues,
        [identifier]: {
          ...[identifier],
          didEdit: true,
        },
      };
    });
  }

  <div className="control no-margin">
    <label htmlFor="email">Email</label>
    <input id="email" type="email" name="email" />
    <div className="control-error">
      {emailIsInvalid && <p>Email is Invalid</p>}
    </div>
  </div>;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={(event) => handleInputBlur("email", event)}
          onChange={(event) => handleInputChanged("email", event)}
          value={enteredValues.email.value}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={(event) => handleInputBlur("pass", event)}
          onChange={(event) => handleInputChanged("pass", event)}
          value={enteredValues.pass.value}
        />
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
