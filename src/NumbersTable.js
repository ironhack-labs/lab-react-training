import React from 'react';

export default class NumbersTable extends React.Component {
  constructor(state, props) {
    super(props);

    // this.state = {};
  }

  render() {
    var numbers = (num) => {
      var arr = [];
      for (let i = 0; i < num; i++) {
        arr.push(i+1);
      }
      console.log(arr)
      return arr;
      
    };

    var numArr = numbers(this.props.limit);

    const boxes = numArr.map((num) =>
      <div className="NumBox" key={num.toString()}>{num}</div>
    );
    console.log(boxes);

    return (<div className="NumbersTable">{boxes}</div>);
  }
}
