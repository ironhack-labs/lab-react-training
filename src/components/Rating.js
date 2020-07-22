import React from 'react'


function Rating(props) {

    const rating = Math.floor(props.children);
   
    const stars = []
    for (let i= 0; i < rating; i++){
        stars.push(<div>☆</div>);
    }
    for (let i= rating; i < 5; i++){
        stars.push(<div>★</div>);
    }
    
    return (
        <div>
            {stars}
        </div>
    )     
}

export default Rating