function DriverCard({ name, rating, img, car }) {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: '400px',
        }}
      >
        <div>
          <img
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              marginRight: '10px',
            }}
            src={img}
          />
        </div>
        <div style={{ textAlign: 'left' }}>
          <h3 style={{ margin: '0' }}>{name}</h3>
          <span>{rating}</span>
          <p style={{ margin: '0' }}>
            {car.model} {car.licensePlate}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DriverCard;

// name="Travis Kalanick"
//             rating={4.2}
//             img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
//             car={{
//               model: 'Toyota Corolla Altis',
//               licensePlate: 'CO42DE',
