import React from 'react'
import './ClickableImage.css'

function displayGlasses(e) {
    e.preventDefault();
    const glasses = document.getElementsByClassName('img-over')[0]

    glasses.style.display === 'none' ? glasses.style.display = 'block' : glasses.style.display = 'none'
}

function ClickableImage(props) {
    return (
        <div onClick={displayGlasses} className="img-pr" style={{ backgroundImage: `url(${props.img})` }}>
            <img className="img-over" src={props.imgClicked} alt={props.imgClicked} />
        </div>
    )
}

export default ClickableImage