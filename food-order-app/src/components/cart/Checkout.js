import { useState } from "react";
import { useRef } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isPostalInvalid = (value) => value.length !== 5;

const Checkout = ({ cancelForm, submitOrder }) => {
  const nameInputRef = useRef();
  const cityInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();

  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    city: true,
    street: true,
    postal: true,
  });

  const confirmHandler = (event) => {
    event.preventDefault();

    const name = nameInputRef.current.value;
    const street = streetInputRef.current.value;
    const city = cityInputRef.current.value;
    const postal = postalInputRef.current.value;

    const nameIsValid = !isEmpty(name);
    const streetIsValid = !isEmpty(street);
    const cityIsValid = !isEmpty(city);
    const postalIsValid = !isEmpty(postal) && !isPostalInvalid(postal);

    setFormInputValidity({
      name: nameIsValid,
      street: streetIsValid,
      city: cityIsValid,
      postal: postalIsValid,
    });

    const formIsValid =
      nameIsValid && streetIsValid && cityIsValid && postalIsValid;

    if (!formIsValid) {
      return;
    }
    submitOrder({ name, street, city, postal });
  };

  const nameIsValidStyle = `${classes.control} ${
    formInputValidity.name ? "" : classes.invalid
  }`;
  const streetIsValidStyle = `${classes.control} ${
    formInputValidity.street ? "" : classes.invalid
  }`;
  const cityIsValidStyle = `${classes.control} ${
    formInputValidity.city ? "" : classes.invalid
  }`;
  const postalIsValidStyle = `${classes.control} ${
    formInputValidity.postal ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameIsValidStyle}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputValidity.name && <p>Please Enter Name</p>}
      </div>
      <div className={streetIsValidStyle}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputValidity.street && <p>Please Enter Street</p>}
      </div>
      <div className={postalIsValidStyle}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!formInputValidity.postal && <p>Please Enter Postal Code</p>}
      </div>
      <div className={cityIsValidStyle}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputValidity.city && <p>Please Enter City</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={cancelForm}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
