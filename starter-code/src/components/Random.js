import React from 'react'

const Random = (props) =>{

    let random = Math.floor(Math.random() * props.max) + props.min

    return(
        <article className="random">
            <p> Random Value btween {props.min} and {props.max} => {random}</p>
        </article>
    )

}







export default Random