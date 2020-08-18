import React from 'react';


const Random = (props) => {
    let result = Math.floor(Math.random() * (props.max - props.min) + props.min)
    return (
        <div className="box">
            Random value between {props.min} and {props.max} = &gt; {result}
        </div>
    )
}

export default Random