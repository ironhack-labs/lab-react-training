import React from 'react';

export default class Rating extends React.Component {
  renderStars = () => {
    const fullStars = Math.round(this.props.children) - 1;
    return Array.from({ length: 5 })
      .map((e, i) => (i <= fullStars ? '★' : '☆'))
      .join('');
  };

  render = () => {
    return <h4>{this.renderStars()}</h4>;
  };
}
