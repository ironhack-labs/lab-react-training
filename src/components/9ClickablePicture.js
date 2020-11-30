import React, {useState} from  'react'

export default function ClickablePicture({
  img,
  imgClicked
}){
  const [image, setImage] = useState(img)
  function changeImage(){
    if (image===img) {
      setImage(imgClicked)
    } else {
      setImage(img)
    }
  }
  return (
    <div>
      <img style={{height: '200px'}} src={image} alt="" onClick={changeImage}/>
    </div>
  )
}