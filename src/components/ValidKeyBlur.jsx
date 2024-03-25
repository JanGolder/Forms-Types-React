import { useState } from "react";

export default function ValidKeyBlur() {

// keystroke validation is available only in stateful form

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

// state which keeps data about blur  
  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false
  })

//   it's basic configuration of keystroke validation, to use it properly you have to add focus/blur validation along with it
  const emailIsInvalid = didEdit.email && !formValues.email.includes('@');

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formValues)
  }

  function handleInputChange(event, identifier) {
    setFormValues((prevState) => ({
      ...prevState,
      [identifier]: event.target.value,
    }));
// when user starts to write in the input, the error comunication is hidden
    setDidEdit(prevEdit=>({
        ...prevEdit,
        [identifier]: false
    }))
  }

  function handleInputBlur(identifier){
    setDidEdit(prevEdit=>({
        ...prevEdit,
        [identifier]: true
    }))

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
            onBlur={()=> handleInputBlur('email')}
            id="email"
            type="email"
            name="email"
            value={formValues.email}
          />
          <div className="control-error">{emailIsInvalid && <p>Please enter a valid email address.</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => handleInputChange(e, "password")}
            onBlur={()=> handleInputBlur('password')}
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
