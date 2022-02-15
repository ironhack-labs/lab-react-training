import React from 'react';

function NumbersTable(props) {

    let numArr = [];
    for(let i=1; i< props.limit; i++) {
        numArr.push(i)
    };

    const checkColor = (num) => {
        if(num % 2 === 0) {
            return 'red'
        }
    }

    const box = {
        display: 'flex',
        flexWrap: 'wrap',
        margin: '0',
        padding: '0',
    }

    const styleSpan = {
        width: '60px',
        height: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0',
        padding: '0'
    }

    return(
        <div style={box}>
        {numArr.map(elm => {
            return <div key={elm} style={{backgroundColor: checkColor(elm), border: '1px solid black', margin: '0'}}><span style={styleSpan}>{elm}</span></div>
        })}

        </div>
    )
}

export default NumbersTable;