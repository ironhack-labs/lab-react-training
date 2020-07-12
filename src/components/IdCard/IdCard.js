import React, { Component } from 'react';
import Avatar from '../Avatar/Avatar';

const mapLabels = {
  firstName: 'First Name',
  lastName: 'Last Name',
  gender: 'Gender',
  height: 'Height',
  birth: 'Birth',
  country: 'Country',
  type: 'Type',
};
class IdCard extends Component {
  render() {
    const dataToShow = [];
    Object.keys(this.props).map((key, index) => {
      let label = mapLabels[key];
      if (label) {
        dataToShow.push(
          <div key={index}>
            <label className="cardLabel">{label}&nbsp;</label>
            <span>
              {key === 'birth'
                ? this.props[key].toLocaleDateString()
                : this.props[key]}
            </span>
          </div>
        );
      }
      return null;
    });
    const cssCard = this.props.selected ? 'card cardSelected' : 'card';
    return (
      <div key={this.props.picture} className={cssCard}>
        <Avatar src={this.props.picture} width="150px" />
        <div className="cardItem">{dataToShow}</div>
      </div>
    );
  }
}
export default IdCard;
