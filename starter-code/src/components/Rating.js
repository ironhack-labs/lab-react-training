import React from 'react';

const Rating = props => {
    return (
        <div className = "Rating">
               {
                props.children <= 0 ? 
                  <p>☆☆☆☆☆</p> 
                :  
                props.children <= 1 ? 
                  <p>★☆☆☆☆</p>
                :
                props.children <= 2 ? 
                  <p>★★☆☆☆</p>
                :
                props.children <= 3 ? 
                  <p>★★★☆☆</p>
                :
                props.children <= 4 ? 
                  <p>★★★★☆</p>
                :
                  <p>★★★★★</p>
                }
        </div>
    )
}

export default Rating;