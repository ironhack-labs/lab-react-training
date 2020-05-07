import React from 'react'

const ClickablePicture = (props) => {
  return (
    <div>
      <img onClick={props.changeImg} src={props.imgChange ? props.img : props.imgClicked} alt="" />
    </div>
  )
}

export default ClickablePicture
