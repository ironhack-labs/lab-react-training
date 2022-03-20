import React, { Component} from 'react';
import './IdCard.css';

class IdCard extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="container-card mb-2 mt-2">
        <div className="card-group card-contact">
          <div className="card">
            <img className="img-thumbnail size-img" src={this.props.picture} alt="Card-contact"/>
            <div className="card-body">
              <h5 className="card-title">First Name: {this.props.firstName}</h5>
              <h5 className="card-title">Last Name: {this.props.lastName}</h5>
              <h5 className="card-title">Gender: {this.props.gender}</h5>
              <h5 className="card-title">Height: {this.props.height}</h5>
              <h5 className="card-title">Birth: {this.props.birth.toDateString()}</h5>
            </div>
            </div>
        </div>
        </div>

    )
  }
}

export default IdCard;
