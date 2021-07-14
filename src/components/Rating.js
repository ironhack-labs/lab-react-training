import React from 'react';

function Rating (props){

    const number = Math.round(props.children)

    let stars = '';
    for (let i = 0; i < 5; i++) {
        if (i < number) {
            stars += '★';    
        } else {
            stars += '☆';
        }
    }

   
    return(
        

                <div className="rate-star">
                    {stars}
                </div>

    )
}
export default Rating
