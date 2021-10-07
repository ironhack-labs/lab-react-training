import React from 'react'

function Random({min,max}) {
    let random = Math.round(Math.random()* (max-min) + min); 
    
    return (
        <div>
        <h5>Random value betweeen {min} a {max} {"=>"}{random} </h5>
        </div>
    )
}

export default Random
