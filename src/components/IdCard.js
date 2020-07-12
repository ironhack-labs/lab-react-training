import React, { Component } from 'react';
import Avatar from './Avatar';

class IdCard extends Component {
  render() {
    const dataToShow = [];
    Object.keys(this.props).map((key, index) => {
      let label = '';
      switch (key) {
        case 'firstName':
          label = 'First Name:';
          break;
        case 'lastName':
          label = 'Last Name:';
          break;
        case 'gender':
          label = 'Gender:';
          break;
        case 'height':
          label = 'Height:';
          break;
        case 'birth':
          label = 'Birth Date:';
          break;
        case 'country':
          label = 'Country:';
          break;
        case 'type':
          label = 'Type:';
          break;
        default:
          label = '';
          break;
      }
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
