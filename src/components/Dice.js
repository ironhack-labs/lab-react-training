import React, {useState} from 'react'


export default function Dice() {


    const diceArr = ['/img/dice1.png',
        '/img/dice2.png',
        '/img/dice3.png',
        '/img/dice4.png',
        '/img/dice5.png',
        '/img/dice6.png']

    const generateRandom = diceArr[Math.floor(Math.random()*diceArr.length)+1]

    const [image, setRandomImg] = useState(generateRandom)

    function randomImg() {
            setRandomImg('/img/dice-empty.png')
            setTimeout(()=>{setRandomImg(generateRandom)
            },1000)

    }

    return (
        <div className="dice">
            <img onClick={()=>{randomImg()}} src={image}/>
        </div>
    )
}
