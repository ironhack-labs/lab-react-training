import React, { useState } from 'react'

const ClickablePicture = ({ img, imgClicked }) => {

    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        clicked ? setClicked(false) : setClicked(true)
    }
    
    return (
        <div className='ClickablePicture' onClick={ handleClick }>
            <img src={ clicked ? imgClicked : img } alt='imgClicked'/>
        </div>
    )
}

export default ClickablePicture
