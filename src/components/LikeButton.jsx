
import React from 'react'
import '../assets/css/LikeButton.css'

const LikeButton = ({counter, onClick}) => {

    return (
      <div className='LikeButton'>
          <button type="button" className="btn btn-primary" onClick={onClick}>{counter} Likes</button>
      </div>
    )
  }

export default LikeButton

