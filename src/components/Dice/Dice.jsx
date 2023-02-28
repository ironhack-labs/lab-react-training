import { useState } from "react";

const context = require.context('../../assets/dice', false, /\.(png|jpe?g|svg)$/)
const images = context.keys().map(context);

const Dice = () => {

    const [index, setIndex] = useState(1)

    const setRandom = () => {
        setIndex(0)
        setTimeout(() => {
            let randIndex = Math.floor(Math.random() * images.length)
            randIndex === 0 ? setIndex(1) : setIndex(randIndex)
        }, 1000);
    }

    return <img src={images[index]} onClick={setRandom} alt="random-dice" />
}

export default Dice