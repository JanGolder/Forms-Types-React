import { useState } from "react";

export default function SubmitStates() {

const [emailValue, setEmailValue] = useState('');
const [passwordValue, setPasswordValue] = useState('');

    function handleSubmit(event){
      event.preventDefault();
      console.log(emailValue, passwordValue);
      setEmailValue('');
      setPasswordValue('');
    }
  
    function handleEmailChange(event){
        setEmailValue(event.target.value)
    }
    function handlePasswordChange(event){
        setPasswordValue(event.target.value)
    }

    function handleReset(){
        setEmailValue('');
        setPasswordValue('');
    }

    return (
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
  
        <div className="control-row">
          <div className="control no-margin">
            <label htmlFor="email">Email</label>
            <input onChange={handleEmailChange} id="email" type="email" name="email" value={emailValue} />
          </div>
  
          <div className="control no-margin">
            <label htmlFor="password">Password</label>
            <input onChange={handlePasswordChange} id="password" type="password" name="password" value={passwordValue} />
          </div>
        </div>
  
        <p className="form-actions">
          <button className="button button-flat" onClick={handleReset}>Reset</button>
          <button className="button">Login</button>
        </p>
      </form>
    );
  }
  