import React from 'react'
import './LikeButtons.css'

const LikeButtons = (props) => {
    const {colors, counters, onClick} = props
  
    return (
        <div className='container'>
            <div className='like-buttons'>
                <button style={{backgroundColor: colors.color1}} id='likes1' onClick={onClick}><span>{counters.count1}</span> Likes</button>
                <button style={{backgroundColor: colors.color2}} id='likes2' onClick={onClick}><span>{counters.count2}</span> Likes</button>
            </div>
        </div>
    )
}

export default LikeButtons
