function DriverCard(props) {
  return (
    <div className="car-card">
      <img src={props.img} alt={props.name} />
      <div className="car-card-info">
        <h1>{props.name}</h1>
        <div className="car-card-rating">
          {props.rating === '0' ? <p>☆☆☆☆☆</p> : null}
          {props.rating >= '1' && props.rating < '1.8' ? <p>★☆☆☆☆</p> : null}
          {props.rating >= '1.9' && props.rating < '2.8' ? <p>★★☆☆☆</p> : null}
          {props.rating >= '2.9' && props.rating < '3.8' ? <p>★★★☆☆</p> : null}
          {props.rating >= '3.9' && props.rating < '4.8' ? <p>★★★★☆</p> : null}
          {props.rating >= '4.9' ? <p>★★★★★</p> : null}
        </div>
        <p className="car-card-model">
          {props.car.model} - {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
