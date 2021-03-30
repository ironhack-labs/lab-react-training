import React, { useState } from 'react'
import './Dice.scss'

const Dice = () => {

    const randomImg = () => {
        return `/img/dice${Math.floor( Math.random() * (6 - 1 + 1) + 1 )}.png`
    }

    const [img, setImg] = useState(randomImg())
    
    const hanldeDice = () => {
        setImg('/img/dice-empty.png')
        setTimeout(() => { setImg(randomImg()) }, 1000)
    }

    return (
        <div className="Dice" onClick={hanldeDice}>
            <img src={img} height={100} alt="dice" />
        </div>
    )
}

export default Dice
