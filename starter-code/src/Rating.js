import React from 'react'

function Rating({children}) {
    const rate = Math.round(children)
    const rating = ['☆','☆','☆','☆','☆']
    for(let i=0; i < rate ; i++){
        rating[i] = '★'
    }
    return (
        <div class="rating">
            {rating.join('')}
        </div>
    )
}

export default Rating