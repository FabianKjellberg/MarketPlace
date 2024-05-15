import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function RoundButton(props) {
    
    const [text] = useState(props.text);
    const [nav] = useState(props.nav);
    
    useEffect(()=>{
      
    },[nav]);
    
  
    let navigate = useNavigate();

    const btnNavigate = () => {
      navigate(nav);
    }

    return (
      <>
          <button onClick={btnNavigate} >{text}</button>
      </>
    );
  }
  
  export default RoundButton;