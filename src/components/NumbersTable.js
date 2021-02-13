import React, { useState } from 'react';

export default function Carousel(props) {
 

  const table = () =>{
    let {limit} = props
    let array = []
    for(let i = 1; i<=limit; i++){
      let toAdd
      if(i%2 === 0){
        toAdd = <div style={{backgroundColor: 'red', border: 'solid black 2px', width:'250px', height: '250px'}}>{i}</div>
        array.push(toAdd)
      } else{
         toAdd = <div
            style={{ border: 'solid black 2px', width: '250px', height: '250px' }}
          >
            {i}
          </div>
          array.push(toAdd)
      }
    }
    return array
  }
  

  return (
    <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
      {table().map((item, index)=>(
        item
      ))}
    </div>
  );
}
