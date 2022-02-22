import './ClickablePicture.css';
import { useState } from 'react';

const ClickablePicture = ({ img, imgClicked  }) => {
    
   const [showGlasses, setShowGlasses] = useState(false)

    const toggleGlasses = () => {
        setShowGlasses(!showGlasses)
    }

   return (
       <div className="clickablePicture">
           <img onClick={toggleGlasses} src={showGlasses ? img : imgClicked} alt="" />
       </div>
   )
}

export default ClickablePicture;


