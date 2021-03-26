import React from 'react'
import '../assets/css/NumbersTable.css'

const NumbersTable = ({limit}) => {

    const numsArr = []
    let counter = 0
 
    for(counter= 1; counter <= limit; counter++){
        numsArr.push(counter)
    }

    const numsList =  numsArr.map((num) => {
        if(num % 2 === 0){
            return <div className='numberSquare numberSquareRed'>{num}</div>
        }else{
            return <div className='numberSquare numberSquareWhite'>{num}</div>
        }
    })


    return (
        
      <div className='NumbersTable '>
         <div className='d-flex flex-wrap p-0 m-0'>{numsList}</div>
      </div>
    )
  }

export default NumbersTable