import Rating from './Rating.jsx';

const DriverCard = ({ name, rating, img, car }) => {
  return (
    <div style={styles.card}>
      <img src={img} alt={name} style={styles.image} />
      <div style={styles.info}>
        <h2>{name}</h2>
        <Rating>{rating}</Rating>
        <p>{car.model} - {car.licensePlate}</p>
      </div>
    </div>
  );
};

const styles = {
  card: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: '10px',
    padding: '20px',
    margin: '20px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  image: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    marginRight: '20px',
  },
  info: {
    textAlign: 'left',
  },
};

export default DriverCard;
