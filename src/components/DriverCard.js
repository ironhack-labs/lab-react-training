function DriverCard(props) {
  const { name, rating, img, car } = props;
  function ratingFunction(rating) {
    switch (Math.round(rating)) {
      case 1:
        return <p>★☆☆☆☆</p>;
        break;
      case 2:
        return <p>★★☆☆☆</p>;
        break;
      case 3:
        return <p>★★★☆☆</p>;
        break;
      case 4:
        return <p>★★★★☆</p>;
        break;
      case 5:
        return <p>★★★★★</p>;
      default:
        return <p>☆☆☆☆☆</p>;
    }
  }

  const style = {
    display: `flex`,
    flexDirection: `row`,
    backgroundColor: `blue`,
    textAlign: `center`,
    margin: `20px`,
    width: `500px`,
  };
  return (
    <div style={style}>
      <div>
        <img src={img} alt="" width={`100px`} />
      </div>
      <div>
        <p>{name}</p>
        <br />
        {ratingFunction(rating)}
        <br />
        <p>
          {car.model}-{car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
