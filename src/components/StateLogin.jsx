import { useState } from "react";
import Input from "./Input";
import { hasMinLength, isEmail, isNotEmpty } from "../util/validation";

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
    enteredValues.email.didEdit &&
    !isEmail(enteredValues.email) &&
    !isNotEmpty(enteredValues.email);
  const passwordIsInvalid =
    enteredValues.pass.didEdit && !hasMinLength(enteredValues.password, 6);

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
          error={emailIsInvalid && "Please enter a valid email"}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={(event) => handleInputBlur("pass", event)}
          onChange={(event) => handleInputChanged("pass", event)}
          value={enteredValues.pass.value}
          error={passwordIsInvalid && "Please enter a valid password"}
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
