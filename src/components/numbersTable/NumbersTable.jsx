import React from 'react';

import './NumbersTable.css';

class NumbersTabe extends React.Component {
  drawAll() {
    let counter = 0;
    return [...Array(this.props.limit)].map(function (e, i) {
      counter++;
      
         if(counter % 2 === 0){

            return (
                <span className="busterCards red" key={i}>
          {counter}
        </span>
            )

         }else{
            return <span className="busterCards" key={i}>
            {counter}
          </span>

         }
        
      
    });
  }

  render() {
    return <div>{this.drawAll()}</div>;
  }
}
export default NumbersTabe;
