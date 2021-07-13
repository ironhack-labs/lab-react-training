import React from "react"
import PropTypes from "prop-types";


function Rating ({children}){
    let starsNumber = Math.round(children)
    let printStars = ""
    if (starsNumber < 1){
        printStars = "☆☆☆☆☆"
    } else if (starsNumber < 2){
        printStars = "★☆☆☆☆"
    } else if (starsNumber < 3){
        printStars = "★★☆☆☆"
    } else if (starsNumber < 4){
        printStars = "★★★☆☆"
    } else if (starsNumber < 5){
        printStars = "★★★★☆"
    } else if (starsNumber === 5) {
        printStars = "★★★★★"
    }
    
    
    return (
        <div className="card-box-3">
        <strong>{printStars}</strong>
    </div>
    )

}


Rating.propTypes = {
    children: PropTypes.number,
}


export default Rating