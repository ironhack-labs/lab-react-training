import React, {useState} from 'react';

const Dice = () => {

    const randomImg = () => {
        return `/img/dice${Math.floor(Math.random() * (6 - 1 + 1) + 1)}.png`
    }

    const [img, setImg] = useState(randomImg())

    const handlerDice = () => {
        setImg('/img/dice-empty.png')
        setTimeout(() => { setImg(randomImg()) }, 1000)
    }

    return(
        <div className="Dice">
            <img src={img} alt="dice" onClick={handlerDice} style={{ height: '200px' }}/>
        </div>
    )
}

export default Dice