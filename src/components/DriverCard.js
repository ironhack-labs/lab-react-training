import React from 'react';
import Rating from './Rating';
import styles from './DriverCard.module.css';

const DriverCard = ({ name, rating, img, car }) => {
  return (
    <div className={styles.card}>
      <div>
        <img className={styles.img} src={img} alt="profile" />
      </div>
      <div>
        <h2>{name}</h2>
        <Rating>{rating}</Rating>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
