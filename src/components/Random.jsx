import React from 'react'

const Random = (props) => {
    const random = Math.random() * (props.max - props.min) + props.min
    return (
        <div>
            {random}
        </div>
    )
}

export default Random
