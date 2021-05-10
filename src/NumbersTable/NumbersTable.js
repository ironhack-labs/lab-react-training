import React from 'react'

const NumbersTable = ({limit, numberList}) => {

  return (
    <section className="square-container">
      {
        numberList.map((item, index) => 

            item % 2 === 0 ? <div key={index} className="square" style={{background: 'white'}}>{item}</div>
            : <div key={index} className="square" style={{background: 'red'}}>{item}</div> 
          
        )
      }
    </section>
  )
}

export default NumbersTable;
