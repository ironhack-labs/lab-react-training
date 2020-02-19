import React from 'react'
import style from 'styled-component'



const ClickableImage = ({img, imgClicked}) => {
    let clicked = false;

    let changeImg = () => {
        clicked = !clicked
    }

    return (
        <>
        {clicked ? (
        <div>
            <button onClick={changeImg}><img style="background: url(${img}) url(${imgClicked});" src={img} alt="lol"/></button>
        </div>
        ) : (<div>
            <button onClick={changeImg}><img src={img} alt="jiji"/></button>
        </div>)}
        </>
    )
}

export default ClickableImage
