import React from 'react'
import '../assets/css/GreetItem.scss'

const GreetItem = ({text}) => {
    return (
        <div className="GreetItem">
            <p>{text}</p>
        </div>
    )
}

export default GreetItem;