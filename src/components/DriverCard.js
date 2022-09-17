function DriverCard(props) {
  const { name, rating, img, car } = props;
  return (
    <div>
      <br />
      <div>
        <img style={{ width: '40px' }} src={img} alt="picture"></img>
      </div>
      <div>
        <h1>{name}</h1>
        <div>{rating}</div>
        <h4>
          {car.model} {car.plate}
        </h4>
      </div>
    </div>
  );
}

export default DriverCard;
