import { Component } from 'react';
import profiles from '../../../data/berlin.json';
import FacebookItem from './facebookItem';
import './facebook.css';

console.log(profiles);

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
]

export default class Facebook extends Component {
  state = {
    filterBy: undefined,
    members: profiles.splice(0, 2)
  }

  onFilter = (value) => {
    this.setState({ filterBy: value })
  }

  renderProfiles = () => {
    const { filterBy, members } = this.state;

    let profilesToRender = [...members]
    if (filterBy) {
      profilesToRender = profilesToRender.filter(profile => profile.country === filterBy)
    }

    return profilesToRender.map(profile => (
      // <FacebookItem
      //   img={profile.img}
      //   firstName={profile.firstName}
      //   lastName={profile.lastName}
      // />
      <FacebookItem {...profile} selected={profile.country === filterBy} />
    ))
  }

  render() {
    const { filterBy } = this.state;

    console.log(profiles);
    return (
      <div className="Facebook">
        <div>
          {filterOptions.map(option => {
            return (
              <button
                key={option.text}
                onClick={() => this.onFilter(option.value)}
                style={{ backgroundColor: filterBy === option.value ? 'blue' : 'gray' }}
              >
                {option.text}
              </button>
            )
          })}

          {this.renderProfiles()}
        </div>
      </div>
    )
  }
}