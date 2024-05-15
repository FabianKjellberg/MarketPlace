import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthentication } from "../../utilities/AuthenticationProvider";

function RoundButton(props) {
    
    const [text] = useState(props.text);
    const [nav] = useState(props.nav);

    const { loggedIn } = useAuthentication();
    
    let navigate = useNavigate();

    const btnNavigate = () => {
      if(!loggedIn) navigate(`/login?redirect=${nav}`)
      else navigate(nav);
    }

    return (
      <>
          <button onClick={btnNavigate} >{text}</button>
      </>
    );
  }
  
  export default RoundButton;