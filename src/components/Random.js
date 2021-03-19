import React from 'react' 
import '../assets/css/Random.css'

const Random = ({min , max}) => {
   let ranNumber = Math.round(Math.random() * (max - min))
   

return(
    <div className="random" >
        <p>Random value between {min} and {max} => {ranNumber}</p>
    </div>
)

}

export default Random