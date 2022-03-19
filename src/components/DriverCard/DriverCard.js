import React, { Component } from 'react';
import Rating from '../Rating/Rating';
import styles from './DriverCard.module.css';
class DriverCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.card_container}>
        <div
          className={styles.driver_img}
          style={{ backgroundImage: `url(${this.props.img})` }}
        ></div>
        <div className={styles.driver_details}>
          {this.props.name} <Rating fontSize="20px">{this.props.rating}</Rating>{' '}
          <div className={styles.car_details}>
            {this.props.car.model} - {this.props.car.licensePlate}
          </div>
        </div>
      </div>
    );
  }
}

export default DriverCard;
