import React from 'react'

function Random({min, max, children}) {
   
      let random = Math.random() * (max - min) + min;
     
  return (
   
   <div>
    <div className="Greeting">
      <p>
      {children} {random}
      </p>
    </div>
      </div>
    
    
  )
}

export default Random