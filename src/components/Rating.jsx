import React from 'react';



function Rating(props){
    let estrellitas = Math.round(props.children);
    let calif = '';

    for(let i = 0, j = 0; i < 5; i++){
        if(j < estrellitas){
            calif += `★`
        }else{
            calif += `☆`
        }
        j++;
    }
    return (
        <div className="rate">
        {calif}
        </div>
    )
}


export default Rating;