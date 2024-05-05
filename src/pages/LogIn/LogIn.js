import './LogIn.css';
import { useState } from 'react';
import { useNavigate , useLocation} from 'react-router-dom';
import { CognitoUser, AuthenticationDetails,} from 'amazon-cognito-identity-js';
import UserPool from '../../utilities/UserPool';

function LogIn() {
  
  const location = useLocation();
  const loginEmail = new URLSearchParams(location.search).get('userid');

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
    event.preventDefault();
    
    var authenticationData = {
      Username : formData.email,
      Password : formData.password,
  };
  var authenticationDetails = new AuthenticationDetails(authenticationData);
  
  var userPool = UserPool;
  var userData = {
      Username : formData.email,
      Pool : userPool
  };
  var cognitoUser = new CognitoUser(userData);
  cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: function (result) {
          
        const accessToken = result.getAccessToken().getJwtToken();
        const idToken = result.idToken.jwtToken;

        console.log(accessToken);
        console.log(idToken);
        
        document.cookie = `access_token=${accessToken}; Secure;`;
        document.cookie = `id_token=${idToken}; Secure;`;

        
      },

      onFailure: function(err) {
          handleError(err);
      },

  });
})

  
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