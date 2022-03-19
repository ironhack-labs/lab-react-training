import React, { Component } from 'react';
import styles from './IdCard.module.css';

class IdCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.container}>
        <img src={this.props.picture} alt="some_person" />
        <div className={styles.userDetails}>
          <p>First name: {this.props.firstName}</p>
          <p>Last name: {this.props.lastName}</p>
          <p>Gender: {this.props.gender}</p>
          <p>Height: {this.props.height}</p>
          <p>Birthday: {this.props.birth.toLocaleDateString()}</p>
        </div>
      </div>
    );
  }
}

export default IdCard;
