import React from 'react'

const Greetings = props => {
    return (
        <div className="card border">
            {props.lang}, {props.children}
        </div>
    )
}

export default Greetings