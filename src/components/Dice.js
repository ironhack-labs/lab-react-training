import React from 'react'
import {useState} from 'react'

export default function Dice() {
    let [dice, setDice] = useState(dado())
    function dado () {
        const random = Math.floor(Math.random() * 6) + 1
        return `/img/dice${random}.png`
    }

    function change () {
        setDice('/img/dice-empty.png')
        setTimeout(() => {
            setDice(dado())
        }, 1000)

    }
    return (
        <div>
            <img  width='150px' src={dice} onClick={() => change()} />
        </div>
    )
}
