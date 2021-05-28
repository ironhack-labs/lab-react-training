import React, { useState } from 'react'

export default function Dice() {

    const diceArray = ['/img/dice1.png', '/img/dice2.png', '/img/dice3.png', '/img/dice4.png', '/img/dice5.png', '/img/dice6.png', '/img/dice-empty.png']
    const random = () => Math.floor(Math.random() * diceArray.length)

    const [dice, setDice] = useState(diceArray[random()])

    
    
    
    
    
    function delay(){
        const p1 = Promise.resolve('/img/dice-empty.png')
        p1
        .then(image => image)
    }
    console.log(delay())
    return (
        <div className='m-4'style={{width: '200px', height: '200px'}}>
            <img className='h-100' src={dice}
                onClick={() => setDice(() => delay())}
            />
        </div>
    )
}



