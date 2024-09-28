import React, { useState } from 'react'
import dado1 from "../../assets/images/dice1.png"
import dado2 from "../../assets/images/dice2.png"
import dado3 from "../../assets/images/dice3.png"
import dado4 from "../../assets/images/dice4.png"
import dado5 from "../../assets/images/dice5.png"
import dado6 from "../../assets/images/dice6.png"
import dadoVacio from "../../assets/images/dice-empty.png"

const Dice = () => {
    const [dadoMov, setDadoMov] = useState(dado3)

    const dados = [dado1, dado2, dado3, dado4, dado5, dado6]

    const handleClick = () => {
        setDadoMov(dadoVacio);
        setTimeout(() => {
            const dadoRandom = Math.floor(Math.random() * dados.length)
            setDadoMov(dados[dadoRandom])
        }, 1000)
    }

    return (
        <div><img src={dadoMov} alt="dice" onClick={handleClick} style={{ width: "100px" }} /></div>
    )
}

export default Dice