import { useAuthentication } from "../../utilities/AuthenticationProvider";
import "./UserInfo.css"

function UserInfo() {
  
    const {userName} = useAuthentication();

    return (
      <>
        <div className="userinfo">
          <h1>General Information</h1>
          <div className="userinfo-breakline"/>
          <p>Welcome back {userName}!<br/><br/> This page is currently in the work and there is nothing to display here yet. </p>
          <hr style={{ border: 'none', height: '1px', backgroundColor: '#333', marginBottom: '20px', marginRight: '25px' }} />
        </div>
      </>
    );
  }
  
  export default UserInfo;