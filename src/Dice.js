import React, {useState} from 'react'

const Dice = () => {
    const faces = ['img/dice1.png', 'img/dice2.png', 'img/dice3.png', 'img/dice4.png', 'img/dice5.png', 'img/dice6.png']
    let random = Math.floor(Math.random() * faces.length)
    const [cara, setCara] = useState(faces[random])
       
    function throwDice() {
        setCara('img/dice-empty.png')
        setTimeout(() => {
            random = Math.floor(Math.random() * faces.length)
            setCara(faces[random])
        }, 1000)
}
    return (
        <div>
            <img height='100' width='100' src={cara} alt='' onClick={throwDice} />
        </div>
    )
}

export default Dice
