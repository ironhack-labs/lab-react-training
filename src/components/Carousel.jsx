import React, { useState } from 'react'

export default function Carousel(props) {

    const initialState = {
        position: 0,
    }
    const [state, setState] = useState(initialState)

    const handleNext = () => {
        if(state.position < 3){
        setState(state => ({position: state.position++}))
        } else {
            setState(state => ({position: 0}))
        }
    }

    const handlePrev = () => {
        if(state.position >= 1){
        setState(state => ({position: state.position--}))
        } else {
            setState(state => ({position: props.imgs.length - 1}))
        }
    }
    return (
        <div className="Carousel">
            <img src={props.imgs[state.position]} alt="" />
            <button onClick={handleNext}>Next</button>
            <button onClick={handlePrev}>Previous</button>
        </div>
    )
}
