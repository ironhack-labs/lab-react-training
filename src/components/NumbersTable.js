import React from 'react';

function NumbersTable({ limit }) {
      
    let numArr = []
    let count = 1
    
    for (let i = 1; i <= limit; i++) {
        numArr.push(count++)
    }    

  return <ul style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", listStyleType: "none", maxWidth: "575px"}}>{numArr.map((num, index) => {
    return <li key={index} style={{ fontSize: "2rem", display:"flex", alignItems: "center", justifyContent: "center", border: '2px solid', padding: "20px", width: "107px", height: "107px"  }}>
        {num}
        </li>
        })}</ul>
    }

export default NumbersTable;
