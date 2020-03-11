import React from 'react'
import Rate from './Rate'

const Rating = ({ratings}) => {
    // console.log("Output for: Rating -> ratings", ratings)
    return (
        <div className='container'>
           {ratings.map(rate => (
                   <Rate key={rate+Math.floor(Math.random()*1000)} rate={rate}/>
           ))}
        </div>
    )
}

export default Rating
