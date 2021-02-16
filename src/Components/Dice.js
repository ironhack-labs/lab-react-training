import React, { useState } from 'react';

const styles = {
    width : 200,
    height: 200
}
function Dice(){
    const [random, setRandom] = useState('/img/dice-empty.png');
    var images = ['/img/dice3.png','/img/dice-empty.png','/img/dice6.png'];
    const randomImage = () =>{
        var randomDice = Math.floor(Math.random() *  images.length)
        
        setRandom(images[randomDice])

    }
    return(
       <img style={styles} alt="random" src={random} onClick={randomImage} />
    )
}

export default Dice

  