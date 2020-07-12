import React, { useState } from 'react'

export default function ClickablePicture(props) {
    const initialState = {
        img : props.img,
        imgClicked: props.imgClicked
    }
    const [state, setState] = useState(initialState)
    const handleState = () => {
        setState(state => ({...state, img : state.imgClicked}))
    }

    return (
        <div>
            <img src={state.img} onClick={handleState} alt="img"/>
        </div>
    )
}
