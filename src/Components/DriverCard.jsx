function DriverCard(props) {
  const { name, rating, img, car } = props;

  function stars() {
    if (rating <= 0.49) {
      return '☆☆☆☆☆';
    } else if (rating <= 1.49) {
      return '★☆☆☆☆';
    } else if (rating <= 2.49) {
      return '★★☆☆☆';
    } else if (rating <= 3.49) {
      return '★★★☆☆';
    } else if (rating <= 4.49) {
      return '★★★★☆';
    } else {
      return '★★★★★';
    }
  }

  const styleImg = {
    borderRadius: '50%',
    width: '100px',
    height: '100px',
  };

  return (
    <div>
      <img src={img} style={styleImg} />
      <p>{name}</p>
      <p>{stars()}</p>
      <p>
        {car.model}-{car.licensePlate}
      </p>
    </div>
  );
}
export default DriverCard;
