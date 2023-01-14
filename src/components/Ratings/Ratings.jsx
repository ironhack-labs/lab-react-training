import { useState } from "react"

function Ratings(props){
    const {children} = props
    const number = Math.ceil(children)
    
    const [stars, setStars] = useState(number)
    console.log(stars)
    return(
        <div>
        
        {stars === 0 && <p>Movie Rating: ✩✩✩✩✩</p>}
        {stars === 1 && <p>Movie Rating: ★✩✩✩✩</p>}
        {stars === 2 && <p>Movie Rating: ★★✩✩✩</p>}   
        {stars === 3 && <p>Movie Rating: ★★★✩✩</p>}
        {stars === 4 && <p>Movie Rating: ★★★★✩</p>}
        {stars === 5 && <p>Movie Rating: ★★★★★</p>}
        
        
          
        </div>
    )
}

export default Ratings