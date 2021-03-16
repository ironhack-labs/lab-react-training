import React from 'react'
import "../styles/Rating.css"
function Rating(props) {
    let totalStars = "";
    // switch((Number(props.children)).toFixed()) {
    //     case "0":
    //         totalStars = "☆☆☆☆☆";
    //         break;
    //     case "1":
    //         totalStars = "★☆☆☆☆";
    //         break;
    //     case "2":
    //         totalStars = "★★☆☆☆";
    //         break;
    //     case "3":
    //         totalStars = "★★★☆☆";
    //         break;
    //     case "4":
    //         totalStars = "★★★★☆";
    //         break;
    //     case "5":
    //         totalStars = "★★★★★";
    //         break;
    //     default:
    //         totalStars = "☆☆☆☆☆";
    // }

    for (let i = 0; i < 5; i++ ) {
        i < (Number(props.children)).toFixed() ? totalStars += "★" : totalStars += "☆";
    }
    

    return (
        <div>
            <div className="star">{totalStars}</div>
        </div>    
    )    
}

export default Rating
