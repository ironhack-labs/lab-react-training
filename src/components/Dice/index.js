import './DiceStyle.css'
import { useEffect, useState } from 'react'
import dice0 from '../../assets/images/dice-empty.png'
import dice1 from '../../assets/images/dice1.png'
import dice2 from '../../assets/images/dice2.png'
import dice3 from '../../assets/images/dice3.png'
import dice4 from '../../assets/images/dice4.png'
import dice5 from '../../assets/images/dice5.png'
import dice6 from '../../assets/images/dice6.png'

function Dice() {
    const diceArr = [dice0, dice1, dice2, dice3, dice4, dice5, dice6]
    const [diceImg, setDiceImg] = useState(diceArr[0]);
    const [random, setRandom] = useState(0);

    const hanldeRandomDice = () => {
        setRandom(Math.floor(Math.random() * (6 - 1) + 1))
    }

    useEffect(() => {
        setTimeout(() => {
            setDiceImg(diceArr[random]);
        }, 1000)
    }, [random])

    return (
      <div className="Dice" onClick={hanldeRandomDice}>
        <img alt={diceImg} src={diceImg} />
      </div>
    );
}

export default Dice;