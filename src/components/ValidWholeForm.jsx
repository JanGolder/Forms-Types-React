import { useRef, useState } from "react";

export default function ValidWholeForm() {

    const [emailIsInvalid, setEmailIsInvalid] = useState(false);

    const emailValue = useRef();
    const passwordValue = useRef();

    function handleSubmit(event){
      event.preventDefault();

        const enteredEmail = emailValue.current.value;
        const enteredPassword = passwordValue.current.value;

        const emailIsValid = enteredEmail.includes('@');

        if(!emailIsValid){
            setEmailIsInvalid(true);
            return;
        }

        setEmailIsInvalid(false);

      /* when we use refs it's recommended to use event.target.reset() instead of changing value in refs (then it's uncontrolled) */
      event.target.reset();
    }
  

    return (
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
  
        <div className="control-row">
          <div className="control no-margin">
            <label htmlFor="email">Email</label>
            <input ref={emailValue} id="email" type="email" name="email" />
            <div className="control-error">{emailIsInvalid && <p >Please enter a valid email address.</p>}</div>
          </div>
  
          <div className="control no-margin">
            <label htmlFor="password">Password</label>
            <input ref={passwordValue} id="password" type="password" name="password" />
          </div>
        </div>
  
        <p className="form-actions">
          <button className="button button-flat" type="reset">Reset</button>
          <button className="button">Login</button>
        </p>
      </form>
    );
  }
  