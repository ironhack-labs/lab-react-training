import { useState } from 'react';

const Carousel = (props) => {
    let {images} = props

    const [photo, setPhoto] = useState(images[0])

    const changePhotoRight = () => {
        photo === images[0] ? setPhoto(images[1]) 
        : photo === images[1] ? setPhoto(images[2])
        : photo === images[2] ? setPhoto(images[3])
        : setPhoto(images[0])
        }
    const changePhotoLeft = () => {
        photo === images[3] ? setPhoto(images[2]) 
        : photo === images[2] ? setPhoto(images[1])
        : photo === images[1] ? setPhoto(images[0])
        : setPhoto(images[3])
        }

    return (
        <div>
            <button onClick={changePhotoLeft}>Left</button>
            <img src={photo} alt="smokeWeed" />
            <button onClick={changePhotoRight}>Right</button>
        </div>        
    )
}

export default Carousel