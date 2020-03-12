import React from 'react'
import Rate from './Rate'
import {uuid} from 'uuidv4'

const Rating = ({ratings}) => {
    // console.log("Output for: Rating -> ratings", ratings)
    return (
        <div className='container'>
            <h2>Iteration 6: Component: Rating</h2>
            <hr/>
           {ratings.map(rate => (
                   <Rate key={uuid()} rate={rate}/>
           ))}
        </div>
    )
}

export default Rating
