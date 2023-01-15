import React, { useState } from "react";

import glasses from '../images/with-glasses.jpg'
import noGlasses from '../images/without-glasses.jpg'
 
function ClickablePicture() {
    const [click, setClick] = useState(0);

    function changePicture(click) {
        if (click % 2 === 0) {
          return <img src={glasses} alt='with-glasses'/>;
        } else {
          return <img src={noGlasses} alt='without-glasses'/>;;
        }
      }

  return (
    <div className="ClickablePicture">

      <span onClick={() => setClick(click + 1)}>{changePicture(click)}</span>
 
    </div>
  );
}
 
export default ClickablePicture;