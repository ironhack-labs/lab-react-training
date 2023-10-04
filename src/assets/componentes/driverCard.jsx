/* eslint-disable react/prop-types */
function DriverCard(props) {
  const { name, rating, img, car } = props;

  // Función para generar elementos de estrella
  const renderStars = (rating) => {
    const rounded = Math.round(rating);
    const fill = "★".repeat(rounded);
    const empty = "☆".repeat(5 - rounded);
    return <div className="stars">{fill}{empty}</div>;
  }

  const driverImageStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
  };

  return (
    <div className="driver-card">
      <img src={img} alt={name} style={driverImageStyle} />
      <div className="driver-info">
        <h2>{name}</h2>
        <div className="rating">
          {renderStars(rating, 5)}
        </div>
        <p>{`${car.model} - ${car.licensePlate}`}</p>
      </div>
    </div>
  );
}

export default DriverCard;
