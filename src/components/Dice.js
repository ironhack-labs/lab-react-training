import { useState } from 'react';

function Dice() {

    const diceImgArray = [
        "images/dice-empty.png",
        "images/dice1.png",
        "images/dice2.png",
        "images/dice3.png",
        "images/dice4.png",
        "images/dice5.png",
        "images/dice6.png",
    ]

    const [state, setState] = useState(0);
    const [imgChange, setImgChange] = useState(diceImgArray[0])
    // console.log('state: ', state);

    const diceDelay = ()=>{
    setTimeout(() => {
    setState(state + (Math.floor(Math.random() * 6 + 1)))
    setImgChange(diceImgArray[state % diceImgArray.length])
    }, 1000);
    }

    const emptyDiceDelay = () => { setTimeout(() => {
        setState(0)
        setImgChange(diceImgArray[0])
    }, 10)
    }

    return (
        <div>
            <img style={{width: "180px"}} src={imgChange}
        onClick={() => {
            emptyDiceDelay()
            diceDelay()
        }}

            />
        </div>
    )

}


export default Dice