import React from 'react';


function NumbersTable(props) {

    let arr = [];

    for (let i = 0; i <= props.limit; i++) {
        i % 2 === 0 ?
            arr.push({ i, num: 'even' }) :
            arr.push({ i, num: 'odd' })
    }
    return (
        <div>
            {arr.map((number, index) => {
                return (<div key={index} className={number.num === 'even' ? 'even' : 'odd'}>{number.i}</div>)
            })}
        </div>
    )
}

export default NumbersTable;