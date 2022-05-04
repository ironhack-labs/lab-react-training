import { useState } from 'react'


const Dice = () => {

    let number = Math.floor(Math.random() * 6) + 1;
    let srcImg = `../assets/images/dice${number}.png`;
    let vacioImg = '../assets/images/dice-empty.png'

    const [DiceValue, setDice] = useState(3);

    const tiempo = () => {

        setDice(vacioImg);
        setTimeout(() => {
            number = Math.floor(Math.random() * 6) + 1;
            srcImg = `../assets/images/dice${number}.png`;
            setDice(srcImg);

        }, 1000);
    }

    return (

        <button onClick={() => tiempo()} >
            <img src={srcImg} alt="" />
        </button>
    )
}

export default Dice