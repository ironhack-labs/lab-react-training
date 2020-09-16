import React,{useState} from 'react'

function Dice() {

    const [getDice, setDice] = useState("/img/dice-empty.png")

    function randomDice() {

        let random = Math.ceil(Math.random()*6)
        let pic = "/img/dice"+random+".png"

        setTimeout(()=>{
            setDice(pic)
        },1000)
    }

    return (
        <div>
            <img onClick={randomDice} src={getDice} alt={getDice} width="100px"/>
        </div>
    )
}

export default Dice

