import React from 'react';

import './FaceBook.css';
import profiles from '../../data/berlin.json';

class FaceBook extends React.Component {
  constructor(props) {
    super(props);
    this.arrayCountries = profiles.map((profile) => profile.country);
    this.countries = [...new Set(this.arrayCountries)];

    this.state = {
      selected: null,
      active: false,
    }
    this.toggleClass = this.toggleClass.bind(this)
  }
  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }

  render() {
    return (
      <div className="superCard">
        <div>
          {this.countries.map((country, i) => {
            return (
              <button
                className="ButtonFacebook"
                key={i}
                onClick={() => this.setState({ selected: country })}
                style={{
                  backgroundColor:
                    this.state.selected === country ? 'lightblue' : 'white',
                }}
              >
                {country}
              </button>
            );
          })}
        </div>
        <div>
          {profiles.map((ele, i) => {
            return (
              <div
               onClick={this.toggleClass}
                className={this.state.active ? 'cardImg active' : 'cardImg'}
                key={i}
                style={{
                  backgroundColor:
                    this.state.selected === ele.country ? 'lightblue' : 'white',
                }}
              >
                <img src={ele.img} alt="" />
                <div className="textCardFacebook" >
                  <p>
                    <strong>First Name: </strong>
                    {ele.firstName}
                  </p>

                  <p>
                    <strong>Last Name: </strong>
                    {ele.lastName}
                  </p>
                  <p>
                    <strong>Country: </strong>
                    {ele.country}
                  </p>
                  <p>
                    <strong>Type: </strong>
                    {ele.isStudent ? 'Student' : 'Teacher'}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default FaceBook;
