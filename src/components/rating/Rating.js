import React from 'react'
import FullStar from './FullStar.js'
import EmptyStar from './EmptyStar.js'

export default function Rating(props) {
    


    return (
        <div>
            <FullStar /> 
            <EmptyStar />
            <img scr="img/dice1.png" alt="empty" />
           
        </div>
    )
}

{/* <span className="fa fa-star checked"></span>  
            <span className="fa fa-star"></span>  */}