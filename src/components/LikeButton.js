import React, { useState } from 'react';

const LikeButton = () => {
    const [likeCount, addLike] = useState(0);
    return (
        <button onClick={() => addLike(likeCount + 1)}>{likeCount + ' Likes'}</button>
    );
}

export default LikeButton;