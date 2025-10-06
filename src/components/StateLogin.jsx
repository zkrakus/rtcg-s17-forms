import Input from "./Input";
import { hasMinLength, isEmail, isNotEmpty } from "../util/validation";
import { useInput } from "../hooks/useInput";

export default function StateLogin() {
  const {
    value: emailValue,
    handleInputChanged: handleEmailChanged,
    handleInputBlur: handleEmailBlur,
    emailHasError,
  } = useInput("", (value) => {
    return !isEmail(value) && !isNotEmpty(value);
  });

  const {
    value: passwordValue,
    handleInputChanged: handlePasswordChanged,
    handleInputBlur: handlePasswordBlur,
    passwordHasError,
  } = useInput("", (value) => {
    return !hasMinLength(value, 6);
  });

  function handleSubmit() {
    if (!emailHasError || passwordHasError) {
      emailHasError && console.log("email:", emailValue);
      passwordHasError && console.log("password:", passwordValue);
    } else {
      console.log("email:", emailValue);
      console.log("password:", passwordValue);
    }
  }

  <div className="control no-margin">
    <label htmlFor="email">Email</label>
    <input id="email" type="email" name="email" />
    <div className="control-error">
      {emailHasError && <p>Email is Invalid</p>}
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
          onBlur={handleEmailBlur}
          onChange={handleEmailChanged}
          value={enteredValues.email.value}
          error={emailHasError && "Please enter a valid email"}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChanged}
          value={enteredValues.pass.value}
          error={passwordHasError && "Please enter a valid password"}
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
