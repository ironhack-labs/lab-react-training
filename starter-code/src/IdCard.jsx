import React, {Component} from 'react';


class IdCard extends Component {
  render() {
    
    return (
      <div className="IdCard">
      <img src={this.props.picture}/>
      <div className="words">
      <p>
        <strong>First Name:</strong>
        {this.props.firstName}
      </p>
      <p>
        <strong>Last Name:</strong>
        {this.props.lastName}
      </p>
      <p>
        <strong>Gender:</strong>
        {this.props.gender}
      </p>
      <p>
        <strong>Height:</strong>
        {this.props.height}
      </p>
      <p>
        <strong>Birth:</strong>
        {this.props.birth.toDateString()}
      </p>
      </div>
    </div>
    );
  }
}

export default IdCard;

