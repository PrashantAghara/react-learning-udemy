import classes from "./AddUser.module.css";
import Card from "../ui/Card";
import Button from "../ui/Button";
import { useState } from "react";
import Modal from "../ui/Modal";
const AddUser = ({ addNewUser }) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [errorModal, setErrorModal] = useState();

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangeAge = (e) => {
    setAge(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setErrorModal({
        title: "Invalid Input",
        message: "Please Enter Name & Age",
      });
      return;
    }
    if (+age < 1) {
      setErrorModal({
        title: "Invalid Age",
        message: "Please Enter Valid Age",
      });
      return;
    }
    addNewUser(username, age);
    console.log(age, username);
    setAge("");
    setUsername("");
  };
  const errorHandler = () => {
    setErrorModal(null);
  };
  return (
    <div>
      {errorModal && (
        <Modal
          closeModal={errorHandler}
          title={errorModal.title}
          message={errorModal.message}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={submitForm}>
          <label htmlFor="username">Username</label>
          <input
            value={username}
            type="text"
            id="username"
            onChange={onChangeUsername}
          />
          <label htmlFor="age">Age</label>
          <input type="number" value={age} onChange={onChangeAge} id="age" />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
