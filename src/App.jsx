import './index.css';
import { useEffect, useState } from 'react';


function App() {
  const initialValues = { username: '', password: '' };
  const [results, setResults] = useState([]);
  const [formData, setFormData] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isLogin, setIsLogin] = useState(false);


  

  const handleChange = (e) => {
   console.log(e.target)
   const {name, value} = e.target
   setFormData({...formData, [name]: value})
   console.log(formData)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate(formData)
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isLogin) {
      console.log(formData);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <div className="container">
       {Object.keys(formErrors).length === 0 && isLogin ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formData, undefined, 2)}</pre>
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
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>
         
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <button className="fluid ui button blue">Login</button>
        </div>
      </form>
    </div>
  );
}

export default App;