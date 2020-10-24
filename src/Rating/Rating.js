import React from 'react';

export default function Rating(props){
    //console.log(props)
    let star =''
    for(let i=0;i<5;i++){
        if(Math.round(props.children)>i){
           star += '★' 
        } else{
           star +='☆'
        }
    }
    return(
        <div className='showRating'>
        <p>{star}</p>
        </div>
    )
}