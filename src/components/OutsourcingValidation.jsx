import { useState } from "react";
import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";

export default function OutsourcingValidation() {

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid = didEdit.email && !isEmail(formValues.email) && !isNotEmpty(formValues.email);
  const passwordIsInvalid = didEdit.password &&  !hasMinLength(formValues.password, 6);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formValues);
  }

  function handleInputChange(event, identifier) {
    setFormValues((prevState) => ({
      ...prevState,
      [identifier]: event.target.value,
    }));
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: false,
    }));
  }

  function handleInputBlur(identifier) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
  }

  function handleReset() {
    setFormValues({
      email: "",
      password: "",
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={() => handleInputBlur("email")}
          onChange={(e) => handleInputChange(e, "email")}
          value={formValues.email}
          error={emailIsInvalid && 'Email is invalid'}
        />
        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={() => handleInputBlur("password")}
          onChange={(e) => handleInputChange(e, "password")}
          value={formValues.email}
          error={passwordIsInvalid && 'Password has to be at least 6 characters long '}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat" onClick={handleReset}>
          Reset
        </button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
