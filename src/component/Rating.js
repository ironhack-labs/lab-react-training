import React from 'react'

function Rating(prop) {
        function drawStar(rating){
                // console.log(rating)
                const demical = Math.floor(rating);
               return `★`.repeat(demical)+`☆`.repeat(5-demical)
        }
        return (
                <div className="Rating">
                      {drawStar(prop.children)}
                </div>
        )
}

export default Rating
