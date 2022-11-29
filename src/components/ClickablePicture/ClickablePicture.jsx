import './ClickablePicture.css'
import { useState } from 'react'

const ClickablePicture = (props) => {

     const {img, imgClicked} = props

   const [initialImage, setImage] = useState()
  
    const handleChangeImage = () => setImage(!initialImage)

    return (
       <div className='ClickablePicture'>
            <img onClick={handleChangeImage} src={initialImage ? img : imgClicked} alt="image" />
        </div>
    )
}

export default ClickablePicture