import React from 'react'

class NumbersTable extends React.Component {
  render() {
    const numbers = (num) => {
      let arr = [];
      for (let i = 0; i < num; i++) {
        arr.push(i+1);
      }
      return arr;
    }

    let numArr = numbers(this.props.limit);

    const boxes = numArr.map((num) =>{
    if(num%2===0){return <div className="NumBoxRed" key={num.toString()}>{num}</div>}
    else{return <div className="NumBoxWhite" key={num.toString()}>{num}</div>} 
    })
    return (
    <div className="NumbersTable">
    {boxes}
    </div>
    );
  }
}

export default NumbersTable
