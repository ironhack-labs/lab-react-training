import {useState} from 'react'

const LikeButton = () => {
    const [count, setCount] = useState(0);
    const counter = (e) => {
        let cc = count + 1;
        setCount(cc);
    } 
    return(
        <div>
            <button type='submit' onClick={e => counter(e)}>{count} Likes</button>
        </div>
    );
};

export default LikeButton;