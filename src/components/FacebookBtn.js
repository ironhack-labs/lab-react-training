import React from 'react'

export default function FacebookBtn(props) {

  
    return (
        <div>
            <button className="faceBtn" country={props.country} onClick={props.colored}>{props.text}</button>
        </div>
    )
}

