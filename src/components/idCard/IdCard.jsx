import React from 'react';
import './IdCard.css';

class IdCard extends React.Component {
  render() {
    return (
        <div className="idCard">
            <img src={this.props.picture} alt="profile-pict"></img>
                <div className="singleCard">
                    <p>Last Name: {this.props.lastName}</p>
                    <p>First Name: {this.props.firstName}</p>
                    <p>Gender: {this.props.gender}</p>
                    <p>Height: {this.props.height}</p>
                    <p>Birth: {this.props.birth}</p>
                </div>
        </div>
    );
  }
}

export default IdCard;
