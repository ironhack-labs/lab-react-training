import React from 'react'

export default function NumbersTable(props) {
    
    const numbers = () => {
        let arr = [];

        for(let num = 1; num <= props.limit; num++) {
            let divStyle = {backgroundColor: num % 2 ? 'white': 'red'};
            arr.push(<td key={num} style={divStyle} className="number">{num}</td>)
        }
        return arr
    }
    
    return (
      <table className="table mt-3 ml-3">
       <thead className="number">
            <tr></tr>
        </thead>
        <tbody>
          <tr>
            {numbers()}
          </tr>
        </tbody>
      </table>
    );
}
