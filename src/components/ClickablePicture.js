import { useState } from 'react'; 
import maxence from '../assets/images/maxence.png'
import maxenceGlasses from '../assets/images/maxence-glasses.png'

function ClickablePicture (props) {
    const { img, imgClicked } = props;

    const [ photo, setPhoto ] = useState(maxence); 


    return (
        <div className='picture'>
            <img src={photo} alt="pic-one" onClick={() => setPhoto( photo === maxence ? maxenceGlasses : maxence )} />
        </div>
    )
}

export default ClickablePicture;