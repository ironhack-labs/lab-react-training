import { useState } from 'react'

    let dices = []
    let diceEmpty = "/img/dice-empty.png"
    dices.push("img/dice1.png")
    dices.push("img/dice2.png")
    dices.push("img/dice3.png")
    dices.push("img/dice4.png")
    dices.push("img/dice5.png")
    dices.push("img/dice6.png")

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

const Dice =() =>{
    const [diceImg, setRandomDice] = useState(diceEmpty);
    const random = getRandomInt(0,5)
        
    console.log(dices)
    return <div>
            <img style={{width: "100px", heigtht: "100px", margin : "5px"}}
                onClick={() => {
                    setRandomDice(diceEmpty)
                    console.log("click")
                    setTimeout(() => setRandomDice(dices[random]),1000);
                }}src={diceImg}>
            </img>
    </div>

}

export default Dice