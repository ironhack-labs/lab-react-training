import { useState } from "react";

const ClickablePicture = (props) => {

    const { img, imgClicked } = props;

    const [image, setImage] = useState(img)
    const [imageClick, setImageClick] = useState(true)

    const handleClick = () => {
        setImageClick(!imageClick)

        if(imageClick){
            setImage(img)
        } else {
            setImage(imgClicked)
        }
    }
    

    return <div>
            <img src={image} onClick={handleClick} />
           </div>

}

export default ClickablePicture;