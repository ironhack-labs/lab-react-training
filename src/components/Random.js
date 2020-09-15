import React from 'react';

function Random(props){

    let random= props.min + Math.floor(Math.random() * (props.max-props.min+1))
    return( 
        <div className="Random">
            Random value between {props.min} and {props.max} => {random}
        </div>
    ) 
}

export default Random