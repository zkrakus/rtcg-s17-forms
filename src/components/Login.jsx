export default function Login() {
  const [emailIsInvalid, setEmailIsInvalid] = useState();
  
  const email = useRef();
  const password = useRef();

  function handleInputChanged(input, event) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [input]: event.target.value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    const emailIsValid = !enteredPassword.includes("@");

    if(!emailIsValid){
      setEmailIsInvalid(true);
      return;
    }
    setEmailIsInvalid(false);

    
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
            ref={email}
            value={enteredValues.email}
          />
          <div className='control-error'>
            {emailIsInvalid && <p>Please enter a valid email address.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            ref={password}
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
