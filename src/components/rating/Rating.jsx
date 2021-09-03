import React from 'react';
import './Rating.css';

class Rating extends React.Component {
  render() {
    let star =
      '★'.repeat(Math.round(this.props.children)) +
      '✰'.repeat(5 - Math.round(this.props.children));
    return <div className="rating"> {star} </div>;
  }
}

export default Rating;
