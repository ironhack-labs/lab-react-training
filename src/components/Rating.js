import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

export default function Rating({value}) {

    const rate = Math.round(Number(value));

    let stars = []
    let count = 0;

    while (count < 5) {
        if (count < rate) {
            stars.push(<StarIcon key={stars}/>)
            count ++;
        } else {
            stars.push(<StarBorderIcon key={stars}/>)
            count ++;
        }
    }


    return (
        <div>
            {stars}
        </div>
    )
}
