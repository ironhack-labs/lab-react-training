
import React, { useState } from 'react'

function ClickablePicture({ img, imgClicked }) {

  const [activeIgm, setActiveImg] = useState(img)

  

  return (
    <div>
      <img>ClickablePicture</img>
    </div>
  )
}

export default ClickablePicture