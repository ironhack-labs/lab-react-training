import React from 'react'


function Rating({children}) { 
    let rate = Math.round((children))
    let rating = ['☆', '☆', '☆', '☆', '☆']
    for(let i= 0; i< rate; i++){
        rating[i] = '☆'
    }
    return (
        <div>
            {rating.join('')}
        </div>
    )
}

export default Rating
