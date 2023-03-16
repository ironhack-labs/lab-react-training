import React from 'react';
import './NumbersTable.css'



const NumbersTable = ({limit}) => {
    let numberList = []

    for(let i=1; i<=limit; i++) {
        if(i%2 === 0) {
            numberList.push(<div key={i} className='BoxNumber Even'>{i}</div>)
        } else {numberList.push(<div key={i} className='BoxNumber'>{i}</div>)}
    }
  
    return (
        
        <div className='NumbersTable'>
           {numberList} 
        </div>
    );
  
};

export default NumbersTable;