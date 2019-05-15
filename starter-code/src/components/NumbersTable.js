import React from 'react';

const NumbersTable = (props) => {
let {limit} = props;

let arr = (n) => {
    let array = [];
      for (let i=1; i <= n; i++)
      {array.push(i)}
      return array;
  }

  let A = arr(limit);

let clase = (n)=>
n/2 === Math.floor(n/2) ? 'PAR'
: 'NON'

return(
<div className = 'Table'>
{A.map((i,index) => <div 

    className = {clase(i)}

key={index}> {i}</div> )}
</div>
)
};

export default NumbersTable;