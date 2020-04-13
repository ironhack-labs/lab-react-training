import React, {Component} from 'react';
import './index.css';
class Rating extends Component {

  _getString(rating)  {
    let string = '';
    for(let i = 0; i < 5; i++) {
      string += i < rating ? '★' : '☆';
    }
    return string;
  }

  render() {
    const rating = Math.round(this.props.children);
    console.log(rating);
    return (
      <div  className={'rating'}>
        {this._getString(rating)}
      </div>
    );
  }
}

export default Rating;