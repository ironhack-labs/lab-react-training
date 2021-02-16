import React from 'react';

function NumbersTable(props) {
    const numberArray = [];
    const color = ['red','white'];

    for (let i = 1; i <= props.limit; i++) {
        numberArray.push(
            <div style={{backgroundColor: `${color[i % 2]}`, padding: "10px"}}>{i}</div>
        );
    }

    return <div style={{ display: "flex" }}>{numberArray}</div>
};

export default NumbersTable;