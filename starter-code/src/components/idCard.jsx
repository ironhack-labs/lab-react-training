import React, { Component } from 'react';

class IdCard extends Component {
  render() {
    const each = this.props.list;

    return (
      <div className="single-card">
        <img src={each.img} alt={each.lastName} />
        <p>
          this is {each.firstName} {each.lastName}
        </p>
        <p>they're from {each.country}</p>
      </div>
    );
  }
}

export default IdCard;
