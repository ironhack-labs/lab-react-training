import React from 'react'
import './Rating.scss'

const Rating = ({ children }) => {

    const stars = (n) => '★'.repeat(Math.round(n)) + '☆'.repeat(5 - Math.round(n))

    return (
        <div className='Rating'>
            { stars(children) }
        </div>
    )
}

export default Rating
