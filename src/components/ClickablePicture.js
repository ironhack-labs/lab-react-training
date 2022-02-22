// ./src/components/Counter.js
import React, { useState } from 'react';
import maxence from '../assets/images/maxence.png'
import maxenceWithGlasses from '../assets/images/maxence-glasses.png'


function ClickablePicture() {
 
 
    
  let [image, setImage] = useState(maxence);

  return (
    <div className="image">
       <img src={image} onClick={() => setImage( (image) =>  image === maxenceWithGlasses ? image = maxence : image = maxenceWithGlasses)}></img>
    </div>
  );
}

export default ClickablePicture;