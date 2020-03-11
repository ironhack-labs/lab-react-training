import React from 'react'
import Stars from './Stars'
import {uuid} from 'uuidv4'
import './Rating.css'


const Rate = ({rate}) => {
const stars = Array.from({length: Math.round(rate)},(v, i)=> '☆')
const unmarkedStars = Array.from({length: Math.abs(5-stars.length)},(v,i)=> '☆')
// console.log("Output for: Rate -> stars", stars)
    return (
        <div>
            <li className='start-color'><span className='stars'>{stars.map(star => <Stars key={uuid()} star={star}/>)} {unmarkedStars}</span><span>{rate === 0? 'Ratings': rate}</span></li>
        </div>
    )
}

export default Rate
