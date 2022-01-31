import React from 'react'
import {useState} from 'react'


export default function LikeButton() {
    const colors= ['purple','blue','green','yellow','orange','red']

    const setInitialValue = () => {
        return 0
    }
    const [count, setCount] = useState(() => setInitialValue())
    const likeHandler = () => {
        //increment the state of count by 1
        setCount((count) => count + 1)
      }
    return (
        <div className='buttons-container'>
        <button onClick={likeHandler} style={{backgroundColor: colors[count%6], height: '40px', width:'100px'}}>{count} Likes</button>

        </div>
    )
}