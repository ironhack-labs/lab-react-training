import React from "react";

const DriverCard = ({name, rating, img, car}) => {
    const cardStyle = {
        backgroundColor: '#4c4c4c',
        color: 'white',
        padding: '10px',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '230px',
        width: '350px',
      };
      const imgStyle = {
        width: '90px',
        borderRadius: '50%',
        marginBottom: '10px',
      };

      return (
        <div style={cardStyle}>
            <img src={img} alt={name} style={imgStyle}/>
            <p>{name}</p>
            <p>{rating}</p>
            <p>{car.model} - {car.licensePlate}</p>
        </div>
      );
};

export default DriverCard;