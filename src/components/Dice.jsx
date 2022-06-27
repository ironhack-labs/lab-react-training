import React, { useEffect, useState } from 'react'

import './Dice.css'

export default function Dice() {
    const [click, setClick] = useState(false)
    const [image , setImage ] = useState('./assets/images/dice-empty.png')
    const base_url = './assets/images/'

    useEffect(()=>{

        setTimeout(()=>{
            const result = Math.ceil(Math.random()*6)
            console.log('resultat : ',result)
            setImage(`${base_url}dice${result}.png`)
        },1000)
    },[click])

  return (
    <div className="diceContainer">
        <img src={image} alt="dice" onClick={()=>setClick(!click)}/>
    </div>
  )
}
