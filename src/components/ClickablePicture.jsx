import { useState } from 'react'

const ClickablePicture = (props) => {
    const [image, setImage] = useState(props.img)

    return (
        <div className='clickable'>
            <img src={image} alt={'Gamer'} onClick={() => setImage(image === props.img ? props.imgClicked : props.img)} />
        </div>
    )
}

export default ClickablePicture