import { useState } from "react"
import './LikeButton.css'

function LikeButton(){

    const [likes, setLikes] = useState(0)
    const [buttonColor, setButtonColor] = useState('purple')
    const addLike = () =>{
        setLikes(likes+1)
        const randomNumber = Math.floor(Math.random()*10)

        if (randomNumber <2){
            setButtonColor("purple")
        }
        else if (2<=randomNumber <=3){
            setButtonColor("blue")
        } 
        else if (3<randomNumber<=5){
            setButtonColor("green")
        }
        else if(5<randomNumber <=7){
            setButtonColor("yellow")
        }
        else if(7<randomNumber<=10){
            setButtonColor("orange")
        }
    }

    return(
        <div>
        <h1>Press Me!</h1>
    <button className="like-btn" style={{backgroundColor:`${buttonColor}`}} onClick={()=>addLike()}>{likes} Likes</button>
        </div>
    )
}

export default LikeButton