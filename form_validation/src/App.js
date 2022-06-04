import { useState } from 'react';
import './App.css';

function App() {

  const initialValues = {username: "", email: "", password: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors(validate(formValues))
    setIsSubmit(true)
  }

  const validate = (values) => {
    const errors = {}

    if (!values.username) {
      errors.username = "Username is required"
    }
    if (!values.email) {
      errors.email = "Email is required"
    } else if (!(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(values.email))) {
      errors.email = "This is not a valid email format"
    }

    if (!values.password) {
      errors.password = "Password is required"
    }
    return errors
  }

  return (
    <div className="container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className='ui message success'>Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues)}</pre>
      )}
      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p>{ formErrors.username }</p>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{ formErrors.email }</p>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{ formErrors.password }</p>
          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
