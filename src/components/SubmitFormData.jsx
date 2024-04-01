export default function SubmitFormData() {

    function handleSubmit(event){
        event.preventDefault();

        // special build-in browser constructor function (event.target is form below);
        // IMPORTANT! each input fields (select fields also) must have "name" attribute defined, it'll be an identifier
        const fd = new FormData(event.target);

        // in this example there is one piece of data that can't be get in that way - it's checkboxes, because they have the same name
        // So you can get them manually using their name as a argument in getAll method:
        const acquisitionChannel = fd.getAll('acquisition')

        // calling value from email input (email as an argument is a name from input)
        // const enteredEmail = fd.get('email');

        // the most common way of using it is to aggregate all values in one object using this pattern:
        const data = Object.fromEntries(fd.entries());
        // adding array of checkboxes:
        data.acquisition = acquisitionChannel;

        console.log(data);

        event.target.reset();
    }

    return (
      <form onSubmit={handleSubmit}>
        <h2>Welcome on board!</h2>
        <p>We just need a little bit of data from you to get you started 🚀</p>
  
        <div className="control">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" />
        </div>
  
        <div className="control-row">
          <div className="control">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" name="password" />
          </div>
  
          <div className="control">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              id="confirm-password"
              type="password"
              name="confirm-password"
            />
          </div>
        </div>
  
        <hr />
  
        <div className="control-row">
          <div className="control">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" name="first-name" />
          </div>
  
          <div className="control">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" name="last-name" />
          </div>
        </div>
  
        <div className="control">
          <label htmlFor="phone">What best describes your role?</label>
          <select id="role" name="role">
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="employee">Employee</option>
            <option value="founder">Founder</option>
            <option value="other">Other</option>
          </select>
        </div>
  
        <fieldset>
          <legend>How did you find us?</legend>
          <div className="control">
            <input
              type="checkbox"
              id="google"
              name="acquisition"
              value="google"
            />
            <label htmlFor="google">Google</label>
          </div>
  
          <div className="control">
            <input
              type="checkbox"
              id="friend"
              name="acquisition"
              value="friend"
            />
            <label htmlFor="friend">Referred by friend</label>
          </div>
  
          <div className="control">
            <input type="checkbox" id="other" name="acquisition" value="other" />
            <label htmlFor="other">Other</label>
          </div>
        </fieldset>
  
        <div className="control">
          <label htmlFor="terms-and-conditions">
            <input type="checkbox" id="terms-and-conditions" name="terms" />I
            agree to the terms and conditions
          </label>
        </div>
  
        <p className="form-actions">
          <button type="reset" className="button button-flat">
            Reset
          </button>
          <button type="submit" className="button">
            Sign up
          </button>
        </p>
      </form>
    );
  }