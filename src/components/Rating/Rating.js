import React from 'react'
import {AiOutlineStar,AiFillStar} from 'react-icons/ai'
export default function Rating(props) {
    return (
        <div>
            {[...Array(5)].map((star,i) => {
             return  (props.children >= i+1 ? <AiFillStar/>: <AiOutlineStar />)
            })}
        </div>
    )
}
