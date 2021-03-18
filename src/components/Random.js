import React from 'react'
import '../assets/css/Random.css'


const Random = ({min,max})=>{
    let result = Math.round(Math.random() * (max - min) + min);

    return(
        <div className ='text_random'>
            <p>Random value between <strong>{min}</strong> and <strong>{max}</strong> => <strong>{result}</strong></p>
        </div>
    )
}


export default Random