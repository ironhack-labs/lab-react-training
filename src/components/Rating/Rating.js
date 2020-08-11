import React from 'react'
import './Rating.css'

export default function Rating(props) {

    let stars = props.children;

    return (
        <div className="stars-rate">
            <p>{stars >= 0.5 ? '★' : '☆'}</p>
            <p>{stars >= 1.5 ? '★' : '☆'}</p>
            <p>{stars >= 2.5 ? '★' : '☆'}</p>
            <p>{stars >= 3.5 ? '★' : '☆'}</p>
            <p>{stars >= 4.5 ? '★' : '☆'}</p>
        </div>
    )
}
