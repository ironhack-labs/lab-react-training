import React from 'react';

export default class Number extends React.Component {
  render() {
    const getBackgroundColor = () => {
      if (this.props.children % 2 === 0) {
        return 'red';
      } else return 'white';
    };
    return (
      <div
        className="Number"
        style={{ backgroundColor: getBackgroundColor(this.props.children) }}
      >
        {this.props.children}
      </div>
    );
  }
}
