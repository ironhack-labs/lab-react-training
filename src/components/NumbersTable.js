import React from 'react';

class NumbersTable extends React.Component {
  drawingNumbers() {
    let counter = 0;
    return [...Array(this.props.limit)].map((item, index) => {
      counter++;

      if (counter % 2 === 0) {
        return (
          <span className="Cards red" key={index}>
            {counter}
          </span>
        );
      } else {
        return (
          <span className="Cards" key={index}>
            {counter}
          </span>
        );
      }
    });
  }

  render() {
    return <div>{this.drawingNumbers()}</div>;
  }
}
export default NumbersTable;
