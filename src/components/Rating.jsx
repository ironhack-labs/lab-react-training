import React from 'react'

function Rating(props) {
    console.log(props)
    let filledStars = Math.round(props.children);
    let starStrings = "";

    // WAY 1 -- NASTY
    // for (let index = 1; index <= 5; index++) {
    //     if (filledStars>0){
    //         starStrings+="★";
    //         filledStars--;
    //     }else{
    //         starStrings+="☆";
    //     }
    // }

    // WAY 2 -- NASTY 2.0
    let filledStar = "★";
    filledStar = filledStar.repeat(filledStars);
    let notFilledStar = "☆";
    filledStar += notFilledStar.repeat(5-filledStars);

    return (
        <div className="rating">
            {filledStar}
        </div>
    )
}

export default Rating
