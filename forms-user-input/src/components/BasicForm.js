import useInput from "./../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: firstName,
    isValid: firstNameIsValid,
    hasError: firstNameInputIsInvalid,
    enteredValueChangeHandler: firstNameChangeHandler,
    enteredValueBlurHandler: firstNameInputBlur,
    reset: firstNameReset,
  } = useInput((value) => {
    return value.trim() !== "";
  });

  const {
    value: lastName,
    isValid: lastNameIsValid,
    hasError: lastNameInputIsInvalid,
    enteredValueChangeHandler: lastNameChangeHandler,
    enteredValueBlurHandler: lastNameInputBlur,
    reset: lastNameReset,
  } = useInput((value) => {
    return value.trim() !== "";
  });

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailInputIsInvalid,
    enteredValueChangeHandler: emailChangeHandler,
    enteredValueBlurHandler: emailInputBlur,
    reset: emailReset,
  } = useInput((value) => {
    return (
      value.trim() !== "" && value.trim().match(/^[a-zA-Z0-9.]+@gmail.com$/)
    );
  });

  const firstNameInputClasses = firstNameInputIsInvalid
    ? "form-control invalid"
    : "form-control";
  const lastNameInputClasses = lastNameInputIsInvalid
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  let formIsValid = false;
  if (emailIsValid && firstNameIsValid && lastNameIsValid) {
    formIsValid = true;
  } else {
    formIsValid = false;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!firstNameIsValid && !lastNameIsValid && !emailIsValid) {
      return;
    }
    emailReset();
    firstNameReset();
    lastNameReset();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameChangeHandler}
            onBlur={firstNameInputBlur}
          />
        </div>
        {firstNameInputIsInvalid && (
          <p className="error-text">First Name must not be empty.</p>
        )}
        <div className={lastNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameChangeHandler}
            onBlur={lastNameInputBlur}
          />
        </div>
        {lastNameInputIsInvalid && (
          <p className="error-text">Last Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailChangeHandler}
          onBlur={emailInputBlur}
        />
      </div>
      {emailInputIsInvalid && (
        <p className="error-text">Email must not be empty/Invalid.</p>
      )}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
