import React from 'react'

export default function NumbersTable(props) {
  const numbers = [];
  for (let i = 1; i <= props.limit; i++) {
    numbers.push(i)
  }
  const boxes = numbers.map((numb, index) => {
    return numb % 2 === 0 ?
      <div className="box1" key={ index } style={ { backgroundColor: "red" } }><h1>{ numb }</h1></div> :
      <div className="box1" key={ index }><h1>{ numb }</h1></div>
  })

  return (
    <div className="boxContainer">
      { boxes }
    </div>
  )
}

// // not so elegant way :D
// import React, { Component } from 'react';
// export default class NumbersTable extends Component {
//   box = () => {
//     let boxRender = "";
//     for (let i = 1; i < this.props.limit + 1; i++) {
//       boxRender += `<div style="width: 100px; height: 100px; border: 2px solid black; text-align: center">
//       <h1>${i}</h1>
//       </div>`
//     }
//     return boxRender
//   }
//   render() {
//     return (
//       <div
//         dangerouslySetInnerHTML={ { __html: this.box() } }
//         style={ { display: "grid", gridTemplateColumns: "100px 100px 100px 100px 100px" } }
//       >
//       </div>
//     )
//   }
// }
