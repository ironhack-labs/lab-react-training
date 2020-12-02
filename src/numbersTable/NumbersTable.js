import React, {Component} from 'react';
import './NumbersTable.css';

export default class NumbersTable extends Component {
 render() {
    const newArray = [];
    for (let i = 1; i<=this.props.limit; i++){
        newArray.push(i)
    }
    return (
     <div className="Number">
      <ul>
          {newArray.map(n => n %2 === 0 ? 
          <li style={{backgroundColor:'red'}}>{n}</li> :
          <li style={{backgroundColor:'white'}}>{n}</li>)}
      </ul>
     </div>
         );
    }
}

