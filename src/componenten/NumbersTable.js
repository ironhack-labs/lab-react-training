import React from 'react'

function NumbersTable(props) {
    let array = [];
    for (let i = 1; i < props.limit; i++) {
        array.push(i)
    } 

    return (
        <ul className="nrtable">
            {array.map((elem) => {
                return <li class="square" style={ elem % 2 === 0 ? {backgroundColor: 'red'} : {backgroundColor: 'white'}}>{elem}</li>
            })}
        </ul>
    )
    
}

export default NumbersTable;



// import React from 'react'
// function NumbersTable(props) {
//     let array = [];
//     for (let i = 1; i < props.limit; i++) {
//         array.push(i)
//     }
//     return (
//         <div>
//             {array.map((elem) => {
//                return  <li style={ elem % 2 === 0 ? {backgroundColor: 'red'} : {backgroundColor: 'white'}}>{elem}</li>
//             })}
//         </div>
//     )
// }
// export default NumbersTable