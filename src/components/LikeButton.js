import React, {useState} from 'react'


export default function LikeButton() {

const [numberOfLikes, setLikes] = useState(0)

const arr = ['purple','blue','green','yellow','orange','red']

const [colorsArray, setColors] = useState(arr[0])


const finalLikes = ()=> {
    setLikes(numberOfLikes+1)
}

    
    return (
        <div>
               <button  onClick={()=> finalLikes()}>{numberOfLikes} Likes</button>
        </div>
    )
}
