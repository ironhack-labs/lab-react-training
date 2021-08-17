import React, {Component} from 'react';

class IdCard extends Component {
    render() {
      return <div className="idCard">
          <img className="photo" src={this.props.picture}></img>
          <div className="properties">
            <div><b>First Name:</b> {this.props.lastName}</div>
            <div><b>Last Name:</b> {this.props.firstName}</div>
            <div><b>Gender:</b> {this.props.gender}</div>
            <div><b>Height:</b> {this.props.height}</div>
            <div><b>Birth:</b> {this.props.birth}</div>
          </div>
        </div>
    }
}

export default IdCard;