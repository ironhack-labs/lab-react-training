import React, { useState } from 'react';
import maxence from '../assets/images/maxence.png';
import maxenceGlasses from '../assets/images/maxence-glasses.png';

const ClickablePicture = (props) => {
  const [isClicked, setisClicked] = useState(false);

  return (
  <div>
      <img src={isClicked ? `${maxenceGlasses}` : `${maxence}`} alt='Maxence' onClick={()=>setisClicked(!isClicked)}></img>
  </div>
    );
};

export default ClickablePicture;
