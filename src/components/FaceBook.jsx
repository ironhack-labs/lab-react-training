import React, { Component } from 'react';
import profiles from '../data/berlin.json';

class FaceBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: profiles,
    };
  }

  render() {
    console.log('nobres', this.state.contact);

    return (
      <div>
        {this.state.contact.map((item, index) => {
          return (
            <div>
              <p>
                <strong>Firstname: </strong>
                {item.firstName}
              </p>
              <p>
                <strong>Last Name: </strong>
                {item.lastName}
              </p>
              <p>
                <strong>Country: </strong>
                {item.country}
              </p>
              <img className="h-40 w-25" src={item.img} alt="img"></img>
            </div>
          );
        })}
      </div>
    );
  }
}

export default FaceBook;
