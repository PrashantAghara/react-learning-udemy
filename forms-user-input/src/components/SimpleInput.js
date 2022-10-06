import { useEffect, useState } from "react";

const SimpleInput = (props) => {
  //ref approach
  //   const nameInputRef = useRef();
  // const value = nameInputRef.current.value;
  // console.log(value);

  //Overall Form Validity using useState & useEffect
  // const [formIsValid, setFormIsValid] = useState(false);
  // useEffect(() => {
  //   if (nameIsValid) {
  //     setFormIsValid(true);
  //   } else {
  //     setFormIsValid(false);
  //   }
  // }, [nameIsValid]);

  const emailRegex = /^[a-zA-Z0-9.]+@gmail.com$/;

  const [name, setName] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);

  const nameIsValid = name.trim() !== "";
  const nameInputIsInvalid = !nameIsValid && nameTouched;
  const inputValidClass = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailIsValid = email.trim() !== "" && email.trim().match(emailRegex);
  const emailInputIsInValid = !emailIsValid && emailTouched;
  const emailValidClass = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  let formIsValid = false;
  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  } else {
    formIsValid = false;
  }

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const emailInputBlur = (event) => {
    setEmailTouched(true);
  };

  const nameInputBlur = (event) => {
    setNameTouched(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setNameTouched(true);
    console.log(name);
    if (!nameIsValid && !emailIsValid) {
      return;
    }
    setName("");
    setNameTouched(false);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={inputValidClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onBlur={nameInputBlur}
          onChange={nameChangeHandler}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be Empty</p>
        )}
      </div>
      <div className={emailValidClass}>
        <label htmlFor="name">Your Email</label>
        <input
          type="text"
          id="name"
          onBlur={emailInputBlur}
          onChange={emailChangeHandler}
        />
        {emailInputIsInValid && <p className="error-text">Email is Invalid</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
