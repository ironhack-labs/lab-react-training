import cero from "../assets/dice-empty.png"
import one from "../assets/dice1.png"
import two from "../assets/dice2.png"
import three from "../assets/dice3.png"
import four from "../assets/dice4.png"
import five from "../assets/dice5.png"
import six from "../assets/dice6.png"
import { useState } from 'react'
let num = []
num.push(cero)
num.push(one)
num.push(two)
num.push(three)
num.push(four)
num.push(five)
num.push(six)

let random = Math.floor(Math.random() * (6))
function Dice() {
    const [click, setClick] = useState(false)
    function clickHandle() {
        random = Math.floor(Math.random() * (6))
        setClick(!click)

    }
    return (
        <img onClick={() => clickHandle()} width='200px' height='200px' src={num[random]} alt="holi" />
    )


}
export default Dice