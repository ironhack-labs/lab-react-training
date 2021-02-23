import React from 'react'

function Rating({children}) {
  
  const starDisplay = () =>{
    let results = []

    for(let i = 0; i < 5; i++){
      if(i >= Math.round(children)){
        results.push('☆')
      } else {
        results.push('★');
      }
      
    }

      return results.join("")
  }


  return (
    <div>
      <h1>{starDisplay()}</h1>
    </div>
  )
}

export default Rating
