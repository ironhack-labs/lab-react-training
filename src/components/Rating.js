import React from 'react';

function Rating(props){

    let number = Number(props.children);

    let roundedNumber = Math.round(number);

    let result;

    if(roundedNumber === 0){
        return result = '☆☆☆☆☆';
    } else if (roundedNumber === 1){
        return result = '★☆☆☆☆';
    } else if (roundedNumber === 2){
        return result = '★★☆☆☆';
    } else if (roundedNumber === 3){
        return result = '★★★☆☆';
    } else if (roundedNumber === 4){
        return result = '★★★★☆';
    } else if (roundedNumber === 5){
        return result = '★★★★★';
    }

    return(
        {result}
    )
}

export default Rating;