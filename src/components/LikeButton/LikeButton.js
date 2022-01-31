import { React, useState } from 'react'
import './LikeButton.css'
export const LikeButton = ()=>{
    const background = ['purple','blue','green','yellow','orange','red']
    const [s, setS] = useState('');
    const [like, setLike] = useState(0);
    const [bgc, setBgc] = useState(background[0]);
    const click = ()=>{
        setLike(like+1)
        if(like===1){
            setS('s')
        }
        const randomNumber = Math.round(Math.random() * 5);
       
        setBgc(background[randomNumber])
      

    }
    
    return(
        <div>
            <button onClick={click} style={{backgroundColor : bgc}} className='button'>{`${like} Like${s}`}</button>
        </div>
    )
}