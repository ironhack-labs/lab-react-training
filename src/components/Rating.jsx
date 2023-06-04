import React from 'react';

function Rating(prop) {
    const roundedNumber = Math.round(prop.children);
    
    switch (roundedNumber){
        
        case 1:
            <h1>★☆☆☆☆</h1>
            break;
        case 2:
            <h1>★★☆☆☆</h1>
            break;
        case 3:
            <h1>★★★☆☆</h1>
            break;
        case 4:
            <h1>★★★★☆</h1>
            break;
        case 5:
            <h1>★★★★★</h1>
            break;
        default:
             <h1>☆☆☆☆☆</h1>
        }


    
    
}
export default Rating;
