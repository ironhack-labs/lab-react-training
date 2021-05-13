import React from 'react'

function Dice() {

const [diceImg, setDiceImg] = React.useState(`/img/dice${Math.floor(Math.random() * 6) + 1}.png`);

    function rollDice() {
        const numberRolled = Math.floor(Math.random() * 6) + 1;
        const imageUrl = `/img/dice${numberRolled}.png`;
        setTimeout(()=>setDiceImg('/img/dice-empty.png'),10)
        setTimeout(()=>setDiceImg(imageUrl),1000)
    }

    return (
        <div>
            <img src={diceImg} alt="Roll the dice" height="100px" onClick={rollDice}></img>
        </div>
    )
}

export default Dice
