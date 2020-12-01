import React from 'react'
import './Rating.css'

export default function Rating(props) {
    const blackStar='★'
    const whiteStar='☆'
    let startRow='';
    for(let i=1;i<6;i++){
        if(Math.round(props.children)>=i)
            startRow+=blackStar;
        else
            startRow+=whiteStar;
    }
    return (
        <div>
            <p id="star-row">{startRow}</p>
        </div>
    )
}
