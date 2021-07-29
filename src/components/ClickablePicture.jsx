import {useState, useEffect} from 'react';

function ClickablePicture() {
    const [glasses, setGlasses] = useState(false);
    const [imageUrl, setImageUrl] = useState('/img/persons/maxence.png');

    const toggleGlasses = () => {
        setGlasses(glasses => !glasses);
    }

    //Cambiar imagen
    useEffect(()=>{
        console.log(imageUrl)
        if(glasses) {
            setImageUrl('/img/persons/maxence-glasses.png');
        }
        else {
            setImageUrl('/img/persons/maxence.png');
        }
    },[glasses])

    return (
        <div className="clickablePicture">
            <img onClick={() => toggleGlasses()} src={imageUrl} alt="glasses on click"/>
        </div>
    );
}

export default ClickablePicture;