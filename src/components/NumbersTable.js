import React from 'react'

export default function NumbersTable(props) {

    let numbers = [];
    for (let i = 1; i <= props.limit; i++) {
        numbers.push(i)
    }

    let numStyle = {
        backgroundColor: 'red'
    }


    return (
      <div className="numbers-table">
        {numbers.map((num, i) => {
            if (num%2 === 0) {
                return <div style={numStyle} className="numbers-table-item" key={i}>{num}</div>;
            }
            else {
                return <div className="numbers-table-item" key={i}>{num}</div>;
            }
        })}
      </div>
    );
}
