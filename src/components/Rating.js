import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStarOfDavid } from '@fortawesome/free-solid-svg-icons'


const Rating = props => {

    const rating = Math.round(props.children)

    if(rating === 0) {
        return (
        <div>
            <FontAwesomeIcon icon={faStarOfDavid} />
            <FontAwesomeIcon icon={faStarOfDavid} />
            <FontAwesomeIcon icon={faStarOfDavid} />
            <FontAwesomeIcon icon={faStarOfDavid} />
            <FontAwesomeIcon icon={faStarOfDavid} />
        </div>
        )
    } else if (rating === 1) {
        return (
            <div>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarOfDavid} />
                <FontAwesomeIcon icon={faStarOfDavid} />
                <FontAwesomeIcon icon={faStarOfDavid} />
                <FontAwesomeIcon icon={faStarOfDavid} />
            </div>
            )
    } else if (rating === 2) {
        return (
            <div>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarOfDavid} />
                <FontAwesomeIcon icon={faStarOfDavid} />
                <FontAwesomeIcon icon={faStarOfDavid} />
            </div>
            )
    } else if (rating === 3) {
        return (
            <div>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarOfDavid} />
                <FontAwesomeIcon icon={faStarOfDavid} />
            </div>
            )
    } else if (rating === 4) {
        return (
            <div>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarOfDavid} />
            </div>
            )
    } else if (rating === 5) {
        return (
            <div>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
            </div>
            )
    }
}

export default Rating;