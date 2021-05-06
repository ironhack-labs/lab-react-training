import React from 'react';

function Rating({children}){
    let empty = '☆☆☆☆☆'.split('');
    let rate = Math.round(children*1);
    for(let i = 0 ; i < rate; i++){
        empty[i] = '★';
       
    }
    return(
        <p>{empty.join('')}</p>
    )
}

export default Rating;