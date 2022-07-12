import React, {useState}  from 'react'

export default function ClickablePicture({img, imgClicked}) {
    const [showImage, setShowImage] = useState(true)
    function handleImage (){
        setShowImage(!showImage)
    }

  return (
    <img onClick={handleImage} src= {showImage ? img : imgClicked}/>
    )
}
