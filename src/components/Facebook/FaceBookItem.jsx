/*JSX DE LA INTERACCIÓN 14*/

import React from 'react';
import './index.css';

const ProfileInfo = ({ title, value }) => {
  return (
    <p>
      <strong>{title}: </strong>
      {value}
    </p>
  );
};

class FaceBookItem extends React.Component {
  state = {
    showInfo: false,
  };

  toggleInfo = () => {
    this.setState((prevState) => {
      return {
        showInfo: !prevState.showInfo,
      };
    });
  };

  render() {
    const { img, firstName, lastName, country, isStudent } = this.props;

    return (
      <div className={'FaceBookItem'}>
        <div className="FaceBookItem-img" onClick={this.toggleInfo}>
          <img src={img} alt="..." />
        </div>
        {this.state.showInfo && (
          <div>
            <ProfileInfo title="First name" value={firstName} />
            <ProfileInfo title="Last name" value={lastName} />
            <ProfileInfo title="Country" value={country} />
            <ProfileInfo
              title="Type"
              value={isStudent ? 'Student' : 'Teacher'}
            />
          </div>
        )}
      </div>
    );
  }
}

export default FaceBookItem;
