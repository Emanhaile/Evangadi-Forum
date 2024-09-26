import React from "react";
import { useRef } from "react";
import axios from "../axiosConfig";
import {Link, useNavigate} from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const userNameDom = useRef();
  const firstNameDom = useRef();
  const lastNameDom = useRef();
  const emailDom = useRef()
  const passwordDom = useRef();

  async function handleSubmit(e) {
    e.preventDefault();

    const usernameValue = userNameDom.current.value;
    const firstnameValue = firstNameDom.current.value;
    const lastnameValue = lastNameDom.current.value;
    const emailValue = emailDom.current.value;
    const passValue = passwordDom.current.value;

    if (!usernameValue || !firstnameValue || !lastnameValue || !emailValue || !passValue) {
      alert("please provide all required information");
      return;
    }

    try {
      await axios.post("/user/register", {
        username: usernameValue,
        firstname: firstnameValue,
        lastname:lastnameValue,
        email:emailValue,
        password: passValue,
      });

      alert("user registered successfully");
      navigate("/login");
    } catch (error) {
      alert("something went wrong");
      console.log(error.response);
    }
  }
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <span>Username :--- </span>
          <input ref={userNameDom} type="text" placeholder="Username" />
        </div>
        <br />
        <div>
          <span>First name :--- </span>
          <input ref={firstNameDom} type="text" placeholder="fist name" />
        </div>
        <br />
        <div>
          <span>Last name :--- </span>
          <input ref={lastNameDom} ype="text" placeholder="last name" />
        </div>
        <br />
        <div>
          <span>Email :--- </span>
          <input ref={emailDom} type="email" placeholder="email" />
        </div>
        <br />
        <div>
          <span>Password :--- </span>
          <input ref={passwordDom} type="password" placeholder="password" />
        </div>
        <button type="submit">Register</button>
      </form>

      <Link to="/login">Login</Link>
    </section>
  );
}

export default Register;
