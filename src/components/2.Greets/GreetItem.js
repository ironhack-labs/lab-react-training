import React from 'react'
import './GreetItem.scss'

const GreetItem = ({text}) => {
    return (
        <div className="GreetItem">
            <p>{text}</p>
        </div>
    )
}

export default GreetItem;