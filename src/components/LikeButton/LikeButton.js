import React from 'react';

function LikeButton() {
    const [likes, setlikes] = React.useState(0)
    function increaseLikes() {
        setlikes(function (children) {
            return children +1
        })
    }

    return (
      <div>
       <button onClick={increaseLikes}>Likes  {likes}</button>
      
      
      
      </div>
    );
  }
  

  export default LikeButton;