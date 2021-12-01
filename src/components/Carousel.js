import React, {useState} from 'react'

export default function Carousel(props) {
    console.log(props.imgs.length)
    const [counter, setCounter] = useState(0)
    const nextHandler = ()=>{
        setCounter( counter => counter < props.imgs.length -1 ? counter +1 : counter = 0)
    }
    const prevHandler = ()=>{
        setCounter( counter => counter > 0 ? counter -1 : counter = props.imgs.length -1)
    }
    return (
        <div>
        <img src={props.imgs[counter]} />
        <button onClick={prevHandler}>Previous ⇤</button>
        <button onClick={nextHandler}>Next ⇥</button>
        </div>
    )
}
