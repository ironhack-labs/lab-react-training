import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStarHalf } from '@fortawesome/free-solid-svg-icons';

export default function Rating(props) {
    const rating = Math.round(props.children) 
  
        switch(rating) {
            case 0:
                return(
                    <div className="rating-line">
                        <FontAwesomeIcon icon={faStarHalf} />
                        <FontAwesomeIcon icon={faStarHalf} />
                        <FontAwesomeIcon icon={faStarHalf} />
                        <FontAwesomeIcon icon={faStarHalf} />
                        <FontAwesomeIcon icon={faStarHalf} />
                    </div>
                )
            case 1:
                return (
                    <div className="rating-line">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStarHalf} />
                        <FontAwesomeIcon icon={faStarHalf} />
                        <FontAwesomeIcon icon={faStarHalf} />
                        <FontAwesomeIcon icon={faStarHalf} />
                    </div>
                    )
                
            case 2:
                return (
                    <div className="rating-line">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStarHalf} />
                        <FontAwesomeIcon icon={faStarHalf} />
                        <FontAwesomeIcon icon={faStarHalf} />
                    </div>
                    )
               
            case 3:
                return (
                    <div className="rating-line">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStarHalf} />
                        <FontAwesomeIcon icon={faStarHalf} />

                    </div>
                    )
               
            case 4:
                return (
                    <div className="rating-line">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStarHalf} />
                        
                    </div>
                    )
               
            case 5:
                return (
                    <div className="rating-line">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    )
               
            default: 
                return <FontAwesomeIcon icon={faStar} />;
        }

    }