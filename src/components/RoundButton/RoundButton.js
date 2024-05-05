import React, { useEffect, useState } from "react";

function RoundButton(props) {
    
    const [text, setText] = useState(props.text);
  
    return (
      <>
          <button>{text}</button>
      </>
    );
  }
  
  export default RoundButton;