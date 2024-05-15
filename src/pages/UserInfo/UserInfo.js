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
        </div>
      </>
    );
  }
  
  export default UserInfo;