import { React, useState } from 'react'
import './ClickablePicture.css'
import img from '../../assets/images/maxence.png'
import clickedImg from '../../assets/images/maxence-glasses.png'

export  const ClickablePicture = (props)=>{
    const [imgF, setimgF] = useState(false);
    return (
        <div className='div-clickable-picture'>
            <img onClick={()=>{!imgF?setimgF(true):setimgF(false)}} src = {!imgF?img:clickedImg} className='img'></img>
        </div>

    )
}