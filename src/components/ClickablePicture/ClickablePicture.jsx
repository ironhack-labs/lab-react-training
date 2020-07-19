import React, {useState} from 'react'

const ClickablePicture = props => {
    const initialState = {
        clicked: false
    }

    const [state, setState] = useState(initialState)

    const handleClick = () => {
        setState(state => ({clicked: !state.clicked}))
    }

    return (
        <div>
           <img onClick={handleClick} src={state.clicked ? props.imgClicked : props.img} alt="Persona"/> 
        </div>
    )
}


export default ClickablePicture
