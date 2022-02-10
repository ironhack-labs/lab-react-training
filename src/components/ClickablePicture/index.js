import { useState } from 'react';
import './ClickablePictureStyle.css'

function ClickablePicture(props) {
    const [glasses, setGlasses] = useState(false);

    const toggleGlasses = () => {
        setGlasses(!glasses ? true : false);
    }

    return (
      <div className="ClickablePicture" onClick={toggleGlasses}>
        {glasses 
        ? <img alt='GlassesToggle' src={props.imgGlasses} />
        : <img alt='GlassesToggle' src={props.img} />}
      </div>
    );
}

export default ClickablePicture;