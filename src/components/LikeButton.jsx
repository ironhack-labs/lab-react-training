
import React from 'react'
import '../assets/css/LikeButton.css'

const LikeButton = ({counter, addLike, buttonColor}) => {

    return (
      <div className='LikeButton px-3 py-3'>
          <button type="button" className="btn " onClick={addLike} style={{backgroundColor:buttonColor, color:'white'}}>{counter} Likes</button>
      </div>
    )
  }

export default LikeButton

