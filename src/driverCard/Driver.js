import React from 'react'
import Stars from '../rating/Stars'
import './Driver.css'
// import {uuid} from 'uuidv4'

const Driver = ({driver}) => {
    const stars = Array.from({length: Math.round(driver.rating)},(v, i)=> '☆')
const unmarkedStars = Array.from({length: Math.abs(5-stars.length)},(v,i)=> '☆')

    return (
        <div className='eachDriver'>
            <img className='driver-img' src={driver.img} alt={driver.name}/>
            <div>
                <h4>{driver.name}</h4>
                <h4>
                    <span className='stars'>
                        {stars.map((star,i) => <Stars key={i+1} star={star} elemClass={'marked'}/>)}
                        {unmarkedStars.map((star,i) => <Stars key={i+1} star={star} elemClass={'unmarked'}/>)}
                    </span>    
                </h4>
                <h6>{driver.car.model} - {driver.car.licensePlate}</h6>
            </div>
        </div>
    )
}

export default Driver
