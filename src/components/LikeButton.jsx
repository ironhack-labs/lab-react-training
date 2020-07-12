import React, { useState } from 'react'

export default function LikeButton() {
    const colors = ['white', 'purple','blue','green','yellow','orange','red']
    const initialState = {
        color: colors[0],
        likes: 0
    }
    const [state, setState] = useState(initialState)
    // const handleChangeColor = () => {
       
    //         setState((state) => (
    //             {...state, color: colors.map(el => {state.color = el})}
    //         ))
        
    // }
        
    const handleChangeLikes = () => {
        setState((state) => (
            {...state, likes : state.likes + 1,
            color: colors[-1] + 1}
        ))
        // handleChangeColor()
    }

    return (
        <button onClick={handleChangeLikes}
            style={{backgroundColor: `${state.color}`}}>
            {state.likes} Likes
        </button>
    )
}
