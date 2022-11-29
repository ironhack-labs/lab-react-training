
import { useState } from 'react';
import './ClickablePicture.css'


const Picture = props => {
    const { img, imgClicked } = props 
    console.log(img)
    
    const [hasGlasses, setHasGlasses] = useState(false)

     const handleShowGlasses = () => setHasGlasses(!hasGlasses)
  
    return (
            <img onClick={handleShowGlasses} src={hasGlasses ? img : imgClicked} alt="pictures" ></img>
          
    )

   }

export default Picture