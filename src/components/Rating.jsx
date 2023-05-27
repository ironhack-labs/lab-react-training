import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon, library } from '@fortawesome/fontawesome-svg-core';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

library.add(solidStar, regularStar);
icon({ prefix: 'fas', iconName: 'star' });
icon({ prefix: 'far', iconName: 'star' });

const Rating = (props) => {
    const roundedRating = Math.round(props.children);

    return (
        <div>
            {roundedRating === 0 && 
            <div className="rating">
                <FontAwesomeIcon icon={['far', 'star']} style={{ color: "#000000" }} />
                <FontAwesomeIcon icon={['far', 'star']} style={{ color: "#000000" }} />
                <FontAwesomeIcon icon={['far', 'star']} style={{ color: "#000000" }} />
                <FontAwesomeIcon icon={['far', 'star']} style={{ color: "#000000" }} />
                <FontAwesomeIcon icon={['far', 'star']} style={{ color: "#000000" }} />
            </div>
            }

            {roundedRating === 1 && 
            <div className="rating">
                <FontAwesomeIcon icon={['fas', 'star']} style={{ color: "#000000" }} />
                <FontAwesomeIcon icon={['far', 'star']} style={{ color: "#000000" }} />
                <FontAwesomeIcon icon={['far', 'star']} style={{ color: "#000000" }} />
                <FontAwesomeIcon icon={['far', 'star']} style={{ color: "#000000" }} />
                <FontAwesomeIcon icon={['far', 'star']} style={{ color: "#000000" }} />
            </div>
            }

            {roundedRating === 2 && 
            <div className="rating">
                <FontAwesomeIcon icon={['fas', 'star']} style={{ color: "#000000" }} />
                <FontAwesomeIcon icon={['fas', 'star']} style={{ color: "#000000" }} />
                <FontAwesomeIcon icon={['far', 'star']} style={{ color: "#000000" }} />
                <FontAwesomeIcon icon={['far', 'star']} style={{ color: "#000000" }} />
                <FontAwesomeIcon icon={['far', 'star']} style={{ color: "#000000" }} />
            </div>
            }

            {roundedRating === 3 && 
            <div className="rating">
                <FontAwesomeIcon icon={['fas', 'star']} style={{ color: "#000000" }} />
                <FontAwesomeIcon icon={['fas', 'star']} style={{ color: "#000000" }} />
                <FontAwesomeIcon icon={['fas', 'star']} style={{ color: "#000000" }} />
                <FontAwesomeIcon icon={['far', 'star']} style={{ color: "#000000" }} />
                <FontAwesomeIcon icon={['far', 'star']} style={{ color: "#000000" }} />
            </div>
            }

            {roundedRating === 4 && 
            <div className="rating">
                <FontAwesomeIcon icon={['fas', 'star']} style={{ color: "#000000" }} />
                <FontAwesomeIcon icon={['fas', 'star']} style={{ color: "#000000" }} />
                <FontAwesomeIcon icon={['fas', 'star']} style={{ color: "#000000" }} />
                <FontAwesomeIcon icon={['fas', 'star']} style={{ color: "#000000" }} />
                <FontAwesomeIcon icon={['far', 'star']} style={{ color: "#000000" }} />
            </div>
            }

            {roundedRating === 5 && 
            <div className="rating">
                <FontAwesomeIcon icon={['fas', 'star']} style={{ color: "#000000" }} />
                <FontAwesomeIcon icon={['fas', 'star']} style={{ color: "#000000" }} />
                <FontAwesomeIcon icon={['fas', 'star']} style={{ color: "#000000" }} />
                <FontAwesomeIcon icon={['fas', 'star']} style={{ color: "#000000" }} />
                <FontAwesomeIcon icon={['fas', 'star']} style={{ color: "#000000" }} />
            </div>
            }
        </div>
    );
};

export default Rating;
