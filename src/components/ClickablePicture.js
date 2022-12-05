import React, { useState } from 'react'

const ClickablePicture = (props) => {
    const { img, imgClicked } = props
    const [altImg, setAltImg] = useState(false)

    function changeImg() {
        
        setAltImg(!altImg)
       
      }

  return (
    <div>
        <img 
            alt='imagem'
            src={altImg ? imgClicked : img}
            onClick={changeImg}
        />
    </div>
  )
}

export default ClickablePicture