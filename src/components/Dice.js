import React, {useState} from 'react'

const Dice = () => {

    let min = 1;
    let max = 7;
    let imgDiceEmpty = "/img/dice-empty.png"
    let style = { width : `100px`}
    let random = Math.floor(Math.random() * (max - min)) + min;
    let [dice, setDice] = useState(`/img/dice${random}.png`)

    const changeDice = () => {
        setDice(imgDiceEmpty)

        setTimeout(() => {            
            random = Math.floor(Math.random() * (max - min)) + min;
            setDice(`/img/dice${random}.png`)
        }, 1000)
    }

    return (
        <div>            
            <img style={style} src={dice} alt="" onClick={changeDice}/>
        </div>
    )
}

export default Dice

