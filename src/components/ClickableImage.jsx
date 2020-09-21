import React from 'react'
import './ClickableImage.css'

function displayGlasses(e) {
    const glasses = document.getElementsByClassName('img-over')[0]
    glasses.style.display = glasses.style.display === 'none' ? 'block' : 'none'
}

function ClickableImage(props) {
  return (
    <div onClick={displayGlasses} className="img-pr" style={{ backgroundImage: `url(${props.img})` }}>
        <img className="img-over" src={props.imgClicked} alt={props.imgClicked} />
    </div>
  )
}

export default ClickableImage