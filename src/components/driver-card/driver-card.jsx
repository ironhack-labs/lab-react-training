import React from 'react';
import './driver-card.css';

function DriverCard({ name, rating, img, car }) {
  // Función para redondear la calificación a la mitad más cercana
  const roundedRating = Math.round(rating * 2) / 2;

  // Función para mostrar las estrellas según la calificación
  const renderStars = () => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < roundedRating) {
        stars.push('★');
      } else {
        stars.push('☆');
      }
    }
    return stars.join('');
  };

  return (
    <div className="driver-card">
      <img src={img} alt={name} className="driver-photo" />
      <div className="driver-info">
        <h2>{name}</h2>
        <div className="driver-rating">{renderStars()}</div>
        <p>{car.model} - {car.licensePlate}</p>
      </div>
    </div>
  );
}

export default DriverCard;
