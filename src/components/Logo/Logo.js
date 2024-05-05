import './Logo.css'
import logo from '../../resources/images/marketplace_logo.png'

function Logo() {
    return (
      <>
          <div className="logo">
              <img src={logo} alt="example"/>
          </div>
      </>
    );
  }
  
  export default Logo;