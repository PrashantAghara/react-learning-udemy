import React from "react";
import Button from "./Button";
import Card from "./Card";
import classes from "./Modal.module.css";

const Modal = ({ title, message, closeModal }) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={closeModal}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{title}</h2>
        </header>
        <div className={classes.content}>
          <p>{message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={closeModal}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default Modal;
