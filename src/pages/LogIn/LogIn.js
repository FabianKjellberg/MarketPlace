import './LogIn.css';
import { useState } from 'react';
import { useNavigate , useLocation} from 'react-router-dom';
import AuthenticationManager from '../../utilities/AuthenticationManager.js';

function LogIn() {
  
  const location = useLocation();
  const loginEmail = new URLSearchParams(location.search).get('userid');
  const authenticationManager = new AuthenticationManager("http://localhost:8080");

  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: loginEmail,
    password:''
  });

  

  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = ((e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
  });

  const handleError = ((error) => {
      console.log("Error object: ", error.message);
      if(error.message === "User is not confirmed."){
        navigate(`/userconfirmation?userid=${formData.email}`)
      }
      else{
        setShowError(true);
        setErrorMessage(error.message);
      }
  });

  const handleSubmit = ((event) =>{
    authenticationManager.Authenticate(formData)
  });
  
  return (
    <>
      <div className='login'>
        <div className='login-window'>
          <div className='login-greeting'>
            <h2>Welcome back!</h2>
            <h3>We're glad to see you back</h3>
          </div>
          <form className="login-form" onSubmit={handleSubmit}>
            <label className='login-labels'>
              <p>Email</p>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label className='login-labels'>
              <p>Password</p>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </label>
            {showError && (<p className="index-error-message">{errorMessage}</p>)}
            <div className='login-login-button'>
              <button type="submit">Log In</button>
            </div>
            <div className='login-register'>
              <a href="signup">Dont have an account? Register here!</a>
            </div>
            </form>
        </div>
      </div>
    </>
  );
}

export default LogIn;