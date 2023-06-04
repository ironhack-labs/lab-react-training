 import  { useState } from 'react';
function LikeButton() {

    const [count, setCount] = useState(0);
     


    return(
        <div>
        <button onClick={() => setCount(count + 1)}>
                <h3>  {count} Likes  </h3>  
        </button>
        </div>
    )

}
export default LikeButton;