
import React from 'react'

function Rating(props) {

        const stars = [1, 2, 3, 4, 5]
    return (
        <div>
            {stars.map(star => (
                <i 
                style={{ color: star <= props.children ? 'red' : 'grey'}}
                class="fa fa-star" 
                aria-hidden="true"
                ></i>
            ))}
        </div>
    )
}

export default Rating