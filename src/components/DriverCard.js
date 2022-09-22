function DriverCard({ name, rating, img, car }) {
  return (
    <div>
      <img style={{ width: '100px' }} src={img} />
      <h3>{name}</h3>
      <span>{rating}</span>
      <p>
        {car.model} {car.licensePlate}
      </p>
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
