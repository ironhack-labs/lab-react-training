import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

export default function Rating({value}) {
        const rate = Math.round(Number(value));
        
        const stars = [...Array(5)].map((elem, idx) => 
            idx < rate ? 
            <StarIcon key={idx}/> :
            <StarBorderIcon key={idx}/>
        )

    return (
        <div>
            {stars}
        </div>
    )
}
