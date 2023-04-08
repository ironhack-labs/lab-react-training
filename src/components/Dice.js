import {useState} from "react"

const Dice = () => {

    const [dice, setDice] = useState(0);
    const diceRoll = () => {
        setDice('-empty')

        setTimeout(() => {
            setDice(Math.floor(Math.random() * 6) + 1)
        }, 1000);
        ;
    }
    const diceImg = `../dice${dice}.png`

return (

    <div className="dice" onClick={diceRoll}>
        <img src={diceImg} alt=""/>

    </div>
)

}

export default Dice;