import React, { useState } from 'react';

function Dice() {

    const randomDiceValue = () => {
        return  '/images/dice' + Math.round(Math.random() * 6) + '.png';
      };

    const updateDice = () => {
        setImage('/images/dice-empty.png')

        setTimeout(() => {
            setImage(randomDiceValue())
        },1000);

    }

    const [image, setImage] = useState(() => randomDiceValue())

    return(
        <img onClick={() => updateDice()} src={image} alt="" style={{ height: '160px' }}/>
    )
}

export default Dice;