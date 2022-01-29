import React, { useState } from 'react';


const ClickablePicture = ({ img, imgClicked }) => {

  const [clicked, setClicked] = useState(false);

  return (
    <> 
      <img 
        className="margin-all"
        style={{width:"100px"}} 
        onClick={() => setClicked(!clicked)} 
        src={ clicked ? `${img}` : `${imgClicked}`}
        />
    </>
  );
};

export default ClickablePicture;
