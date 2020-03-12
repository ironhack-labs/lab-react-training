import React from 'react'
import './LikeButtons.css'

const LikeButtons = (props) => {
    const {colors, counters, onClick} = props
  
    return (
        <div className='container'>
            <h2>Iteration 8: Component: LikeButton</h2>
            <hr/>
            <div className='like-buttons'>
                <button style={{backgroundColor: colors.color1}} id='like' onClick={onClick}>{counters.count1} Likes</button>
                <button style={{backgroundColor: colors.color2}} id='dislike' onClick={onClick}>{counters.count2} Dislikes</button>
            </div>
        </div>
    )
}

export default LikeButtons
