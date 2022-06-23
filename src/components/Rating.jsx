import React from 'react'

export default function Rating({ children }) {
    const starsNumber = Math.round(parseFloat( children ))
    const star = ''
    const array = []
    for(let i=1 ; i<=5 ; i++){
      if(i<=starsNumber){
        array.push('E')
      }else{
        array.push('X')
      }
    }
    
  return (
    <div className='starsContainer'>
        {array.map(x=>x==='E' ? <div>★</div> : <div>☆</div>)}
    </div>
  )
}
