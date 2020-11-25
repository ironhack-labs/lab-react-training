import './App.css';
import {useState} from "react";
import React from 'react';

const LikeBtn = () => { 
    const [count, setCount] = useState(0) 
    
    function add(){
        setCount(count+1)
    }

        return(
            <div className="likeBtn">
                <button onClick={add}>{count} Likes</button>
            </div>
 
     )
}

export default LikeBtn

