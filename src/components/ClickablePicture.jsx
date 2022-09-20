import { useState } from 'react';

const ClickablePicture = (props) => {
    const [Photo, setPhoto] = useState(props.img);
    

    const updatePhoto = () => {
       
        if (Photo === props.img) {
            setPhoto(props.imgClicked)

        } else {
            setPhoto(props.img)
        }
    }
    return (
        <div>
            <img onClick={() => updatePhoto()} src={Photo} alt="" />
        </div>
    )
}


export default ClickablePicture;