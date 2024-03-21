import { useRef } from "react";

export default function SubmitRefs() {

    const emailValue = useRef();
    const passwordValue = useRef();

    function handleSubmit(event){
      event.preventDefault();
      console.log(emailValue.current.value);
      console.log(passwordValue.current.value);
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
  