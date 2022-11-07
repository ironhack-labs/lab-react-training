import React from 'react'
import { useState } from 'react';


 function ClickablePicture(props) {

    const [show, setShow] = useState(true);


  return (
    <div>
        <div onClick={() => setShow(!show)}>
  {show ? <img src={props.img} width="100px" /> : <img src={props.imgClicked} width="100px"/> }
</div>

        
    </div>
  )
}

export default ClickablePicture;
