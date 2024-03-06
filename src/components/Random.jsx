import React from 'react'

const Random = ({min, max}) => {
const random = Math.floor(Math.random()* (min, max +1)) 
    return(
  
    <div>{random}</div>
 ) 
}

export default Random