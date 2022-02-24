import React from 'react'
import image1 from "../assets/images/maxence.png"
import image2 from "../assets/images/maxence-glasses.png"
import { useState } from "react";



export default function ClickablePicture() {

    const [data,setData] = useState(image1)

    const changeImg = () => {
        setData(image2)

    }

    const changeImg2 = () => {
        setData(image1)
    }

  return (
    <>

    
    { 
        data === image1 ?
        <img onClick={() => {changeImg()}} src={data} alt=""/>
        :
        <img onClick={() => {changeImg2()}} src={data} alt=""/>
    }

    </>
  )
}
