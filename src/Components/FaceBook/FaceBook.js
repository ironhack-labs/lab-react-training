import React from 'react';
import profiles from '../../data/berlin.json';
import IdCard from '../idcard/IdCard';

class FaceBook extends React.Component {
  state = {
    country: 'USA',
  };

  handleFilter = (event) => {
    this.setState({ country: event.target.name });
  };

  render() {
    return (
      <div>
        <div>
          {profiles.map((profile) => (
            <button onClick={this.handleFilter} name={profile.country}>
              {profile.country}
            </button>
          ))}
        </div>
        <div>
          {profiles.map((profile) =>
            profile.country == this.state.country ? (
              <IdCard
                firstName={profile.firstName}
                lastName={profile.lastName}
                country={profile.country}
                img={profile.img}
                isStudent={profile.isStudent}
              ></IdCard>
            ) : (
              ''
            )
          )}
          ;
        </div>
      </div>
    );
  }
}

export default FaceBook;