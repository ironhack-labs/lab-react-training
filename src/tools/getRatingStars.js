import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as regStar } from '@fortawesome/free-regular-svg-icons'

const getRatingStars = (rate) => {
    let arr = [1,2,3,4,5]
    return arr.map((e,i) => 
        i < Math.round(rate) ? <FontAwesomeIcon icon={solidStar} key={e} /> : <FontAwesomeIcon icon={regStar} key={e} />
    )
}

export default getRatingStars