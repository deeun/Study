import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [err, setErr] = useState();

  const usernameInput = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  };

  const ageInput = (e) => {
    e.preventDefault();
    setAge(e.target.value);
  };

  const addUserHandler = (e) => {
    e.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
        setErr ({
            title: "Invalid Input",
            message: "Please enter a valid name and age (non-empty values)."
        })
    }
    if (+age < 1 ) {
        setErr ({
            title: "Invalid age",
            message: "Please enter a valid age (> 0)."
        })
    }
    props.onAddUser(username, age);
    setUsername("");
    setAge("")
  };

  const errHandler = () => {
    setErr(null);
}

  return (
    <>
    { err && <ErrorModal title={err.title} message={err.message} onConfirm={errHandler}/> }
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" value={username} onChange={usernameInput} />
        <br />
        <label htmlFor="age">Age (Years)</label>
        <input type="number" id="age" value={age} onChange={ageInput} /> <br />
        <br />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </>
  );
};

export default AddUser;
