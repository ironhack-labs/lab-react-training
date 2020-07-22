 
import React, {useState} from 'react';

const LikeButton = (props) => {
  const [state, setState] = useState({
    likes: 0
  })

  const addLike = () => {
    setState({
      likes: state.likes += 1
    })
  }

  return ( 
    <div className="like-btn-container">
      <button onClick={addLike} className='like-btn' > {state.likes} Likes </button>
    </div>
  );
}

export default LikeButton;