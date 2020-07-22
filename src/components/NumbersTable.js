import React from 'react'
import './NumbersTable.css';


export default function NumbersTable(props) {
    const numbers=[]
    for (let i=1; i<=props.limit; i++){
        let bgColor={
            backgroundColor: i % 2 ? 'red': 'white'
        }
        if(i%2){
            numbers.push(
                <div style={bgColor}>
                    <p>{i}</p>
                </div>
            )
        }else{
            numbers.push(
                <div style={bgColor} >
                    <p>{i}</p>
                </div>)
        }
    }

    return (
        <table className="table" >
               <tbody>
          <td className="numbers">
            {numbers}
          </td>
        </tbody>
      </table>
    )
}
