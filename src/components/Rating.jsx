import React from 'react'

function Rating(props) {
  function stars(star){
        const number = Math.round(star)
        switch(number) {
            case 5:
                return '★★★★★'
            case 4:
                return '★★★★☆'
            case 3:
                return '★★★☆☆'
            case 2:
                return '★★☆☆☆'
            case 1:
                return '★☆☆☆☆'
            case 0:
                return '☆☆☆☆☆'
            default:
                return '';  
        }
    };
    return (
        <div style={{display:"flex", margin:20}}>
            <h2>Rating: {stars(props.children)}</h2>
        </div>
    )
}

export default Rating
