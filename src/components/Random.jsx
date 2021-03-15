import React from 'react'

const Random = (props) => {
    return (
        <div>
            {Math.floor(props.min + Math.random()*(props.max-props.min+1))}
        </div>
    )
}

export default Random
