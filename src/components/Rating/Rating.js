import React from 'react'
import './Rating.css'

export default function Rating(props) {
    function showRating (props){
 
        const rate = Math.round(props.children) 
        const filledStar = 	 "\u2605"
        const star = "\u2606"
        
        if(rate < 5){
            return filledStar.repeat(rate) + star.repeat(5-rate)
        }  else {
            return filledStar.repeat(rate)
        }
        
    }
    

    return (
        <div className='rating'>
            <p> {showRating(props)}	</p>
        </div>
    )
}
