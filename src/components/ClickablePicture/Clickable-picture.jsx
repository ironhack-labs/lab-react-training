import './Clickable-picture.css'
import maxence from '../../assets/images/maxence.png'
import maxenceGlases from '../../assets/images/maxence-glasses.png'
import { useState } from 'react'

function ClickablePicture() {
  const [image, setImage] = useState(true)

  const changeImage = () => setImage(!image)

  return (
    <div>
      <div onClick={changeImage}>
        {image ?
          ( <div className='d-flex'>
              <img className="cliclable-picture" src={maxence} alt="img" />
              <h3>Click en la imagen</h3>
            </div>
          ) : (
            <div className='d-flex'>
              <img className="cliclable-picture" src={maxenceGlases} alt="img-classes" />
              <h3>oh si nena</h3>
            </div>
          )}
      </div>
    </div>

  )
}

export default ClickablePicture