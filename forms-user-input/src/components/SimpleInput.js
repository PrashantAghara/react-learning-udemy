import { useState } from "react";

const SimpleInput = (props) => {
  //ref approach
  //   const nameInputRef = useRef();
  //state approach
  const [name, setName] = useState("");
  const [nameTouched, setNameTouched] = useState(false);

  const nameIsValid = name.trim() !== "";
  const nameInputIsInvalid = !nameIsValid && nameTouched;
  const inputValidClass = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const nameChangeHandler = (event) => {
    setName(event.target.value);
    if (event.target.value.trim() !== "") {
    }
  };

  const nameInputBlur = (event) => {
    setNameTouched(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setNameTouched(true);
    console.log(name);
    if (!nameIsValid) {
      return;
    }
    // const value = nameInputRef.current.value;
    // console.log(value);
    setName("");
    setNameTouched(false);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={inputValidClass}>
        <label htmlFor="name">Your Name</label>
        <input
          //   ref={nameInputRef}
          type="text"
          id="name"
          onBlur={nameInputBlur}
          onChange={nameChangeHandler}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be Empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
