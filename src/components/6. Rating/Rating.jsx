import { Component } from 'react';
import './Rating.css';

export default class Rating extends Component {
  render() {
    let rate = this.props.children;
    return (
      <div className="stars">
        {rate >= 0.5 ? '★' : '☆'}
        {rate >= 1.5 ? '★' : '☆'}
        {rate >= 2.5 ? '★' : '☆'}
        {rate >= 3.5 ? '★' : '☆'}
        {rate >= 4.5 ? '★' : '☆'}
      </div>
    );
  }
}
