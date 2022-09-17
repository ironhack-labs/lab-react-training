import Rating from './Rating';

function DriverCard(props) {
  const { name, rating, img, car } = props;

  return (
    <div
      style={{
        backgroundColor: '#00BFFF',
        borderRadius: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        padding: '20px',
        gap: '15px',
      }}
    >
      <div
        style={{
          height: '120px',
          width: '120px',
          borderRadius: '50%',
          background: `url(${img}) center`,
          backgroundSize: 'cover',
        }}
      ></div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <h2 style={{ margin: '0' }}>{name}</h2>
        <Rating>{rating}</Rating>
        <p style={{ margin: '0', fontSize: '18px' }}>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
