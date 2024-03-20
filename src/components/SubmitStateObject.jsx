import { useState } from "react";

export default function SubmitStateObject() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formValues)
  }

  function handleInputChange(event, identifier) {
    setFormValues((prevState) => ({
      ...prevState,
      [identifier]: event.target.value,
    }));
  }

  function handleReset() {
    setFormValues({
        email: "",
        password: "",
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => handleInputChange(e, "email")}
            id="email"
            type="email"
            name="email"
            value={formValues.email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => handleInputChange(e, "password")}
            id="password"
            type="password"
            name="password"
            value={formValues.password}
          />
        </div>
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
