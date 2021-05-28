import React, { useState } from "react";
import { Jumbotron } from "react-bootstrap";
import Login from "../../component/login/Login";
import ResetPassword from '../../component/password-reset/resetPassword'

import "./Entry.page.css";
export const Entry_page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[formLoad,setFormLoad] = useState("reset")

  const formSwitcher = (formType) => {
    setFormLoad(formType)
  }

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      default:
        break;
    }
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      return alert("fill all field");
    }
    console.log(email, password);
  };

  const handleOnResetSubmit = (e) => {
    e.preventDefault();

    if (!email ) {
      return alert("fill all field");
    }
    console.log(email);
  };
  return (
    <div className="entry-page bg-info">
      <Jumbotron className="form-box">
      {formLoad === 'login'  &&  <Login
          handleOnChange={handleOnChange}
          email={email} 
          password={password}
          handleOnSubmit={handleOnSubmit}
          formSwitcher = {formSwitcher}
        />}
       
       {formLoad === 'reset'  &&  <ResetPassword
          handleOnChange={handleOnChange}
          email={email} 
          password={password}
          handleOnResetSubmit={handleOnResetSubmit}
          formSwitcher = {formSwitcher}
        />}
      </Jumbotron>
    </div>
  );
};
