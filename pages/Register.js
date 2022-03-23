import { useRouter } from "next/router";
import React, { useRef, useState } from "react";

import classes from "./login.module.css";

export default function Register() {
  const [user, setUser] = useState({});
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const router = useRouter();

  async function submitHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredFirstName = firstNameInputRef.current.value;
    const enteredLastName = lastNameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
     

    // optional: Add validation
    if (fname === "" || lname === "" || email === "" || password === "") {
      setError(true);
    } else {
      setUser (user: {
      fname: enteredFirstName,
      lname: enteredLastName,
      email: emailInputRef,
      password: enteredLastName,
    }
);
      console.log("user:", user);
      setError(false);
    }
  }

  return (
    <div>
      <section className={classes.auth}>
        <h1>Register</h1>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor='firstName'>First Name</label>
            <input
              type='text'
              id='firstName'
              required
              ref={firstNameInputRef}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor='lastName'>Last Name</label>
            <input type='text' id='lastName' required ref={lastNameInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='email'>Your Email</label>
            <input type='email' id='email' required ref={emailInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Your Password</label>
            <input
              type='password'
              id='password'
              required
              ref={passwordInputRef}
            />
          </div>
          <div className={classes.actions}>
            <button>Create Account</button>
            <button
              type='button'
              className={classes.toggle}
              onClick={switchAuthModeHandler}
            >
              {isLogin ? "Create new account" : "Login with existing account"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
