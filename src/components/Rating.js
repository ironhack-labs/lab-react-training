import React from 'react'

export default function Rating(props) {
    const whiteStar = 'https://upload.wikimedia.org/wikipedia/commons/1/18/Five-pointed_star.svg';
    const blackStar = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Five_Pointed_Star_Solid.svg/815px-Five_Pointed_Star_Solid.svg.png';
    const ratingNumber = Math.round(props.children);
    let rating = []
    switch(ratingNumber){
        case 0:
            rating = [whiteStar, whiteStar, whiteStar, whiteStar, whiteStar];
            break;
        case 1:
            rating = [blackStar, whiteStar, whiteStar, whiteStar, whiteStar];
            break;
        case 2:
            rating = [blackStar, blackStar, whiteStar, whiteStar, whiteStar];
            break;
        case 3:
            rating = [blackStar, blackStar, blackStar, whiteStar, whiteStar];
            break;
        case 4:
            rating = [blackStar, blackStar, blackStar, blackStar, whiteStar];
            break;
        case 5:
            rating = [blackStar, blackStar, blackStar, blackStar, blackStar];
            break;
        default:
            rating = [whiteStar, whiteStar, whiteStar, whiteStar, whiteStar];
    }

    return (
        <div className='starContainer'>
            <img src={rating[0]} alt='star'></img>
            <img src={rating[1]} alt='star'></img>
            <img src={rating[2]} alt='star'></img>
            <img src={rating[3]} alt='star'></img>
            <img src={rating[4]} alt='star'></img>
        </div>
    )
}
