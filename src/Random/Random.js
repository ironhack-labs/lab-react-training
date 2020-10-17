import React from 'react';


export default function Random(props){
    const random = Math.floor (Math.random() * Math.floor(props.max))
    return(   
        <div className='random'>
        <p>Random Value between {props.min} and {props.max} => {random} </p>
        </div>
    )
}