import React from 'react'
import './Random.css'

const Random = (props) =>{
    return (
        <section>
            <div>
                Random value between {props.min} and {props.max} => {Math.round(Math.random() * (props.max - props.min) + props.min)}
            </div>
        </section>
    )
}

export default Random