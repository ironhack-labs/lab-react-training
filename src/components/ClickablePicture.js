import React from 'react'
import { useState } from 'react'

const ClickablePicture = ({img,imgClicked}) => {
    const [click, setClick] = useState(true)
    return (
        <div >
         <span >{click ? 
         <img style={{height:"200px", margin:"10px"}} onClick={() => setClick(!click)} src={img} alt=""/> :
         <img style={{height:"200px", margin:"10px"}} onClick={() => setClick(!click)} src={imgClicked} alt=""/>}</span> 
        </div>
    )
}

export default ClickablePicture
