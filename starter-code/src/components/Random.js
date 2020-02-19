import React from 'react'
import {Random} from '../styles/styles'

const RandomComp = ({min, max}) => {
    return (
        <Random>
            <p>Random value between {min} and {max} => { Math.floor(Math.random() * max - min) }</p>
        </Random>
    )
}

export default RandomComp
