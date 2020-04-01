import React from 'react'

 const Rating = (props) => {
     
    const rate = Math.round(props.children)
    const rating = ['☆','☆','☆','☆','☆']

    for(let i=0;i<rate;i++){
        rating[i] ='★'
    }

    return (
        <div>
            {rating.join('')}
        </div>
    )
}
export default Rating;