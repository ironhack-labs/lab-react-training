import React from 'react';
import '../assets/css/Rating.css'


const Rating = ({ n }) => {
    const handleChange = (a) => {
        const n = Math.round(a)
        let stars = ''
        for (let i = 0; i < 5; i++) {
            if (i < (n)) {
                stars += '★'
            } else {
                stars += '☆'
            }
        }
        return stars;
    }

    return (
        <div className='Rating'>
            <h2>{handleChange(n)}</h2>
        </div >
    )

}

export default Rating;