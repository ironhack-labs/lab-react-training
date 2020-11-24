import '../style/Rating.css'
import React from 'react';


function Rating(props) {
    return (
        <div className="Rating">
            <h1>{rating(Math.round(props.children))}</h1>
        </div>
    )

    function rating(rate) {
        switch (rate) {
            case 0:
                return '☆☆☆☆☆'
            case 1:
                return '★☆☆☆☆'

            case 2:
                return '★★☆☆☆'

            case 3:
                return '★★★☆☆'

            case 4:
                return '★★★★☆'

            case 5:
                return '★★★★★'

            default:
                 throw new Error("No rating")
        }
    }
}

export default Rating;