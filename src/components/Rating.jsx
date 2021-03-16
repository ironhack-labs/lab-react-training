import React from 'react'

const Rating = (props) => {
    const ratingValue = Number(props.children).toFixed();
    
    let stars = '';
    for(let i = 0; i < 5; i++) {
        stars += i < ratingValue ? '★' : '☆';
    } 

    return (
        <div className='Rating'>
            <p>{stars}</p>
        </div>
    )
}

export default Rating
