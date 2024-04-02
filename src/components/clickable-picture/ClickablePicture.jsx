import { useState } from 'react'
import './ClickablePicture.css'

function ClickablePicture({ img, imgClicked }) {

    const [image, setImage] = useState(img);

    const toggle = () => {
        setImage(image === img ? imgClicked : img);
    }

  return (
    <div>
        <img className="img" onClick={toggle} src={image}/>
    </div>
  )
}

export default ClickablePicture;