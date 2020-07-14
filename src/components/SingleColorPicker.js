import React from 'react'

function SingleColorPicker(props) {
    return (
        <div>
            <div className={props.color}></div>
            {props.color}<input type="number" min="0" max="255" onChange={props.changeRed} />
        </div>
    )
}

export default SingleColorPicker
