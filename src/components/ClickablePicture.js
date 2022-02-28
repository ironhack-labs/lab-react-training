import React from 'react'
import image1 from "../assets/images/maxence.png"
import image2 from "../assets/images/maxence-glasses.png"
import { useState } from "react";



export default function ClickablePicture() {

    const [photo,setPhoto] = useState(image1)

    const changeImg1 = () => {
        setPhoto(image2)

    }

    const changeImg2 = () => {
        setPhoto(image1)
    }

  return (
    <>

    
    { 
        photo === image1 ?
        <img onClick={() => {changeImg1()}} src={photo} alt=""/>
        :
        <img onClick={() => {changeImg2()}} src={photo} alt=""/>
    }

    </>
  )
}