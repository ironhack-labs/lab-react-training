import React from 'react'

const Rating = (props) => {
    
    if(Number(props.children) === 0){
        return <div>☆☆☆☆☆</div>
    } else if (Number(props.children) >= 1 && Number(props.children) <= 1.99){
        return <div>★☆☆☆☆</div>
    } else if (Number(props.children) >= 2 && Number(props.children) <= 2.99){
        return <div>★★☆☆☆</div>
    } else if (Number(props.children) >= 3 && Number(props.children) <= 3.99){
        return <div>★★★☆☆</div>
    } else if (Number(props.children) >= 4 && Number(props.children) <= 4.99){
        return <div>★★★★☆</div>
    } else {
        return <div>★★★★★</div>
    }
}

export default Rating
