import React, { Component } from 'react';

class Rating extends Component {
  render() {
    const stars = [
      { checked: false },
      { checked: false },
      { checked: false },
      { checked: false },
      { checked: false },
    ];

    const starsChecked = Math.round(parseFloat(this.props.children));
    stars.map(
      (star, index) => (star.checked = index < starsChecked ? true : false)
    );
    return (
      <div>
        {stars.map((star, index) => {
          const cnStar = 'fa ' + (star.checked ? 'fa-star' : 'fa-star-o');
          const cssStar = {
            color: this.props.color ? this.props.color : 'black',
            fontSize: this.props.width ? this.props.width : '100px',
          };
          const id = Math.random() * 1000000 + index;
          return <i key={id} className={cnStar} style={cssStar}></i>;
        })}
      </div>
    );
  }
}
export default Rating;
