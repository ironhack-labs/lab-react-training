import { useState } from "react";

function Dice(){
    
    const [diceValue, setDiceValue] = useState(3)

    const randomValue = () => {
        const max = 6
        const min = 1
        const currentValue = Math.floor(Math.random() * (max - min + 1) + min)
        setDiceValue(0)
        const time = setTimeout(() => {
            setDiceValue(currentValue)
        }, 1000)
    }



    const diceImage = () => {
        if(diceValue===0){
            return '../assets/images/dice-empty.png'
        } else if(diceValue===1){
            return '../assets/images/dice1.png'
        } else if(diceValue===2){
            return '../assets/images/dice2.png'
        } else if(diceValue===3){
            return '../assets/images/dice3.png'
        } else if(diceValue===4){
            return '../assets/images/dice4.png'
        } else if(diceValue===5){
            return '../assets/images/dice5.png'
        } else if(diceValue===6){
            return '../assets/images/dice6.png'
        }
    }

        return(
            <div className="Dice">
                <button onClick={() => randomValue()}>
                    <img src={diceImage()}/>
                </button>
            </div>
        )
}

export default Dice