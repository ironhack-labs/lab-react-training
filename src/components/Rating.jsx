import React from 'react';

function Rating(prop) {
    const roundedNumber = Math.round(prop.children);
    console.log(roundedNumber);

    switch (roundedNumber){
        
        case 1:
            return (<h1>★☆☆☆☆</h1>)
            break;
        case 2:
            return (<h1>★★☆☆☆</h1>)
            break;
        case 3:
            return (<h1>★★★☆☆</h1>)
            break;
        case 4:
            return (<h1>★★★★☆</h1>)
            break;
        case 5:
            return (<h1>★★★★★</h1>)
            break;
        default:
            return( <h1>☆☆☆☆☆</h1>)
        }


    
    
}
export default Rating;
