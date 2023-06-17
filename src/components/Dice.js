import React from "react"
import {useState} from "react"


function Dice(){
const [diceValue, setDiceValue] = useState("/images/dice-empty.png")

function newLaunch(){
    setDiceValue(`/images/dice-empty.png`)
    setTimeout(() => {    
        let randomValue = Math.floor(Math.random()*6)+1
        let diceImg = `/images/dice${randomValue}.png`
        setDiceValue(diceImg)},"1000")
}

return(
    <div className="dice">
        <img onClick={newLaunch} src={diceValue} alt="diceImg"/>
    </div>
)
}

export default Dice

// 