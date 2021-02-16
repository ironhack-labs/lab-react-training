import React from 'react';

function Dice() {
    const diceImage = [
        '/img/dice1.png',
        '/img/dice2.png',
        '/img/dice3.png',
        '/img/dice4.png',
        '/img/dice5.png',
        '/img/dice6.png'
    ];

    const diceEmpty = '/img/dice-empty.png';

    const [diceState, setDiceImage] = React.useState(getRandomDice());

    function getRandomDice() {
        const randomIndex = Math.floor(Math.random() * diceImage.length);
        return diceImage[randomIndex];
    };

    const handleClick = () => {
        const previousState = diceState;

        if(previousState === diceEmpty) {
            setDiceImage(getRandomDice());
        } else {
            setDiceImage(diceEmpty);
        }
    };

    return <img src={diceState} alt='dice-image' onClick={handleClick} style={{height:'100px'}}/>;
}
 export default Dice;