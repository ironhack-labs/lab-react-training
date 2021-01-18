import React from 'react';
import 'bulma/css/bulma.css';
import './randNumber.css'

const RandNumber = props =>{
    let min = props.min
    let max = props.max
    let randNumber = Math.floor(Math.random() * (max - min) + min);

    return (
        <div className='box'>
            <div className="columns">
                <div className="column">
                    <h1>Random Value between {min} and {max} = {randNumber}</h1>
                </div>
            </div>
        </div>
    )

}

export {RandNumber}