import React from 'react'

function NumbersTable(props) {
    const {limit} = props;
    const numbersArray =Array.from({length: limit}, (_,i) => i+1);
    console.log(numbersArray);
    let color = (number) => number%2===0?"red":"white";
    return (
        <div style={{display: "flex", padding: "20px",width: "300px", flexWrap: "wrap"}}>
                {numbersArray.map((number, index) => {
                    return (
                        <div key={index} style={{width: "50px", height: "50px", borderStyle: "solid", alignContent: "center", backgroundColor: `${color(number)}`}}>{number}</div>
                    )
                })}
        </div>
    )
}

export default NumbersTable

