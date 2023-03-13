import React from 'react';
import './index.css';
import profiles from '../../data/berlin.json';
import FaceBookItem from './FaceBookItem';

const filterOptions = [
  {
    text: 'All',
    value: undefined,
  },
  {
    text: 'England',
    value: 'England',
  },
  {
    text: 'USA',
    value: 'USA',
  },
  {
    text: 'Malaysia',
    value: 'Malaysia',
  },
  {
    text: 'Germany',
    value: 'Germany',
  },
];

class FaceBook extends React.Component {
  state = {
    filterBy: undefined,
    members: profiles,
  };

  onFilter = (value) => {
    this.setState({ filterBy: value });
  };

  renderProfiles = () => {
    const { filterBy, members } = this.state;

    let profilesToRender = [...members];

    if (filterBy) {
      profilesToRender = profilesToRender.filter(
        (profile) => profile.country === filterBy
      );
    }

    return profilesToRender.map((profile) => (
      <FaceBookItem {...profile} key={profile.firstName} />
    ));
  };

  render() {
    const { filterBy } = this.state;

    return (
      <div className="FaceBook">
        <div>
          {filterOptions.map((option) => {
            return (
              <button
                key={option.text}
                onClick={() => this.onFilter(option.value)}
                style={{
                  backgroundColor: filterBy === option.value ? 'aqua' : 'white',
                }}
              >
                {option.text}
              </button>
            );
          })}

          {this.renderProfiles()}
        </div>
      </div>
    );
  }
}

export default FaceBook;
