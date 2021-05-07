import React, { useState } from 'react'

const ClickablePicture = () => {
  
  const [pic, setPic] = useState(false);

  const setPicHandler = () => setPic(!pic);

  return (
    <div>
      <a onClick={setPicHandler}>
      {
        pic ? <img src="../img/persons/maxence-glasses.png"/> : <img src="../img/persons/maxence.png"/>
      }        
      </a>
    </div>
  )
}

export default ClickablePicture;
