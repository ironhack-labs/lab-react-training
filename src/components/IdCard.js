import React, { Component } from 'react';

class IdCard extends Component {
  render() {
    return (
      <div className="IdCardBox">
        <div className="IdCard-imagem">
          <img src={this.props.picture} alt="Imagem" />
        </div>
        <div className="IdCard-list">
          <ul>
            <li>First Name: {this.props.firstName}</li>
            <li>Last Name: {this.props.lastName}</li>
            <li>Gender: {this.props.gender}</li>
            <li>Height: {this.props.height}</li>
            <li>Birth: {this.props.birth}</li>
          </ul>
        </div>
      </div>
    );
  }
}
export default IdCard;
