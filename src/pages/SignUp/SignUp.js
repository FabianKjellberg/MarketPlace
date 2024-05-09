import './SignUp.css';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import UserPool from '../../utilities/UserPool.js';
import AccountRegistrationManager from '../../utilities/AccountRegistrationManager';

function SignUp() {
  
  const navigate = useNavigate();
  
  const [errorMessage, setErrorMessage] = useState("");
  const [showError, setShowError] = useState(false);
  const accountRegistrationManager = new AccountRegistrationManager("http://localhost:8080");

  const [formData, setFormData] = useState({
    username:'',
    email:'',
    password:'',
    repeatPassword:'',
  });

  const handleChange = ((e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
  });

  const handleSubmit = ((event) => {
      event.preventDefault();

      if(formData.password === formData.repeatPassword && formData !== ""){
        if(checkPasswordStrength(formData.password)){
            accountRegistrationManager.registerAccount(formData);
        } 
        else{
          setErrorMessage("password is too weak");
          setShowError(true)
        }       
      }else{
        setErrorMessage("passwords not matching");
        setShowError(true)
      }
  
    function checkPasswordStrength(password){
      console.log(password.length);
      if(password.length >= 8) {
        return true
      }
      else return false
    }
  });

  return (
    <>
      <div className='signup'>
      
        <div className='signup-window'>
          <div className='signup-greeting'>
            <h2>Sign up and start bidding today!</h2>
            <p>Start bidding on items today.</p>
          </div>
          <form className="signup-form" onSubmit={handleSubmit}>
          <label className='signup-labels'>
              <p>User Name</p>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </label>
            <label className='signup-labels'>
              <p>Email</p>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label className='signup-labels'>
              <p>Password</p>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </label>
            <label className='signup-labels'>
              <p>Repeat Password</p>
              <input
                type="password"
                name="repeatPassword"
                value={formData.repeatPassword}
                onChange={handleChange}
                required
              />
            </label>
            {showError && (
                <div>
                    <p className="index-error-message">{errorMessage}</p>
                    <p><b>Rules:</b></p>
                    <ul>
                      <li><p>Password must contain atleast 8 characters.</p></li>
                      <li><p>Password must contain atleast 1 lowercase character.</p></li>
                      <li><p>Password must contain atleast 1 uppercase character.</p></li>
                      <li><p>Password must contain atleast 1 special character.</p></li>
                    </ul> 
                </div>
            )}
            <div className='signup-register-button'>
              <button type="submit">Create Account</button>
            </div>
            <div className='signup-login'>
              <a href="login">Already have an account? Click here!</a>
            </div>
            </form>
        </div>
      
      </div>
    </>
  );
}

export default SignUp;