import  React from "react"

const Random = (props) => {
    let random = Math.floor(Math.random() * props.max) + props.min 

    return (
        <div className="random">
            Random value between {props.min} and {props.max} => {random}
        </div>
    )
}

export default Random;