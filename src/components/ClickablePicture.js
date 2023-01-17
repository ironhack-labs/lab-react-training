import { useState } from 'react';
 
function ClickablePicture(props) {

  const [picture, setPicture] = useState(true);
 

  const togglePicture = () => {
    setPicture(!picture);
  };
 
  return (
    <div>
      <button onClick={togglePicture}> 
      <img src= {picture ? props.img : props.imgClicked} alt="guy"/>
      </button>
    </div>
  );
}
 
export default ClickablePicture;