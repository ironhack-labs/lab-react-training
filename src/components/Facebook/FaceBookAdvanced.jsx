import React, { Component } from 'react';
import profiles from '../../data/berlin.json';
import FacebookFilter from './FacebookFilter';

export class FaceBookAdvanced extends Component {
  state = {
    country: 'all',
  };
  filterHandler = (selectedValue) => {
    this.setState({ country: selectedValue });
  };
  createArray = () => {
    const arr = profiles.filter((prof) => prof.country === this.state.country);
    return this.state.country === 'all' ? profiles : arr;
  };
  render() {
    const filteredArr = this.createArray();
    return (
      <>
        <FacebookFilter onFilterSelect={this.filterHandler}></FacebookFilter>
        {filteredArr.map((profile) => {
          return (
            <div className="face-box" key={Math.random()}>
              <div>
                <img src={profile.img} alt="" />
              </div>
              <div>
                <h4>First Name: </h4>
                <p>{profile.firstName}</p>
                <br />
                <h4>Last Name: </h4> <p>{profile.lastName}</p>
                <br />
                <h4>Country: </h4>
                <p>{profile.country}</p>
                <br />
                <h4>Type: </h4>
                <p>{profile.isStudent ? 'Student' : 'Teacher'}</p>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default FaceBookAdvanced;
