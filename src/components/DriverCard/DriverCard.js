import './DriverCard.css';

const DriverCard = (props) => {
  function star() {
    const rating = Math.round(props.rating);
    let score = '';

    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        score += '★';
      } else score += '☆';
    }
    return score;
  }

  return (
    <article className="DriverCard">
      <img src={props.img} alt={props.name} />
      <p>
        <strong>{props.name}</strong>
      </p>
      <p>{star()}</p>
      <p>
        {props.car.model} - {props.car.licensePlate}
      </p>
    </article>
  );
};

export default DriverCard;
