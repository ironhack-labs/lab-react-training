import React from 'react'
import FontAwesome from 'react-fontawesome'

const Rating = props => {
    let starArray = []
    let filledStars = Math.round(props.rating)
    let unfilledStars = 5 - filledStars
    if (filledStars === 5){
        return (
            <div>
                <FontAwesome className="far fa-star"/>
                <FontAwesome className="far fa-star"/>
                <FontAwesome className="far fa-star"/>
                <FontAwesome className="far fa-star"/>
                <FontAwesome className="far fa-star"/>
            </div>
        )
    }else{
    for (let i=0; i < filledStars; i++){
        starArray.push (
            <FontAwesome className="far fa-star"/>
        )
    }
    for (let i=0; i < unfilledStars; i++){
        starArray.push (
            <FontAwesome className="far fa-star-o"/>
        )
    }
    return(
        <div>
            {starArray}
        </div>
    ) 
}
}

export default Rating