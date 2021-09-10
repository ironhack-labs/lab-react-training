// import React, { Component } from 'react';

// class NumbersTable extends Component {

//     constructor(props){
//         super(props);
//     }

//     drawTable = (props) => {
//         const arr = [];
//         for (let i = 1; i <= this.props.limit; i++) {
//             let obj = {
//                 num: i,
//             }
//             if (i % 2 === 0) {
//                 obj.color = 'red'
//             }
//             else {
//                 obj.color = 'white'
//             }
//             i % 2 === 0 ? (obj.color = 'red') : obj.color = 'white';
//             arr.push(obj)
//         }

//         const list = arr.map(el => {
//             return (
//                 <div className="numbers-card" key={el.num} style={{backgroundColor: el.color}}>
//                 {el.num}
//             </div>
//             )
//         })

//         return (
//             <>
//                 {this.list}
//             </>
//         )
//     }

//     render() {
//         return (
//             <div>
//             {this.drawTable}
                
//             </div>
//         );
//     }
// }

// export default NumbersTable;

export default function NumbersTable(props) {
    const arr = [];
    for (let i = 1; i <= props.limit; i++) {
        let obj = {
            num: i,
        }
        if (i % 2 === 0) {
            obj.color = 'red'
        } else {
            obj.color = 'white'

        }
        i % 2 === 0 ? (obj.color = 'red') : obj.color = 'white';
        arr.push(obj)
    }
    const list = arr.map(el => {
        return (
            <div className="numbers-card" key={el.num} style={{backgroundColor: el.color}}>
                {el.num}
            </div>
        )
    })
    return (
        <>
            {list}
        </>
    )
}
