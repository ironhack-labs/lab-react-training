import React from 'react';



function Rating(props){
    let stars = Math.round(props.children);
    let result = '';

    for(let i = 0, j = 0; i < 5; i++){
        if(j < stars){
            result += `★`
        }else{
            result += `☆`
        }
        j++;
    }
    return (
        <div className="rating">
        {result}
        </div>
    )
}


export default Rating;

