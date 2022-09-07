import {useState} from "react"

function LikeButton(){
    //               0          1       2       3           4       5
    const color = ["purple", "blue", "green", "yellow", "orange", "red"]
    const [number, setNumber] = useState(0)

    function changeColor(){
        setNumber(number+1) // 6
        
    }

    return(
        <div className="Like">
            <button style={{backgroundColor: color[number%color.length]}} className="likeButton" onClick={changeColor}>{number}Like</button>
        </div>
    )
}
export default LikeButton;